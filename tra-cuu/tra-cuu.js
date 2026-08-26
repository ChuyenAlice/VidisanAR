/* =========================================================
   TRA CỨU HIỆU SUẤT AFFILIATE — vidisan.vn/tra-cuu
   Gọi GET /api/affiliate-lookup?q=<SĐT hoặc Mã Affiliate> trên Worker rồi
   dựng dashboard. Mọi con số (kể cả tỉ lệ hoa hồng) đều lấy từ API — trang
   này KHÔNG tự tính lại, để không bao giờ lệch với số Worker thực trả.
   ========================================================= */
(function () {
  "use strict";

  var LOOKUP_ENDPOINT = "https://vidisanar-api.tranchuyen091289.workers.dev/api/affiliate-lookup";

  var form = document.getElementById("lookupForm");
  var input = document.getElementById("lookupInput");
  var btn = document.getElementById("lookupBtn");
  var btnLabel = btn.querySelector(".lk-btn__label");
  var spinner = document.getElementById("lookupSpinner");
  var errorBox = document.getElementById("lookupError");
  var resultBox = document.getElementById("lookupResult");

  var partnerName = document.getElementById("partnerName");
  var partnerCode = document.getElementById("partnerCode");
  var partnerGroup = document.getElementById("partnerGroup");
  var partnerLink = document.getElementById("partnerLink");
  var partnerCopyBtn = document.getElementById("partnerCopyBtn");
  var partnerCopied = document.getElementById("partnerCopied");

  var statClicks = document.getElementById("statClicks");
  var statClicksNote = document.getElementById("statClicksNote");
  var statPaidOrders = document.getElementById("statPaidOrders");
  var statTotalOrders = document.getElementById("statTotalOrders");
  var statEarned = document.getElementById("statEarned");
  var statBalance = document.getElementById("statBalance");
  var statPayoutStatus = document.getElementById("statPayoutStatus");

  var ordersBody = document.getElementById("ordersBody");
  var ordersEmpty = document.getElementById("ordersEmpty");
  var ratesNote = document.getElementById("ratesNote");

  function formatVnd(amount) {
    return new Intl.NumberFormat("vi-VN").format(Number(amount) || 0) + " đ";
  }

  function formatPercent(rate) {
    return Math.round((Number(rate) || 0) * 100) + "%";
  }

  function setLoading(isLoading) {
    btn.disabled = isLoading;
    input.disabled = isLoading;
    spinner.hidden = !isLoading;
    btnLabel.textContent = isLoading ? "Đang tra cứu..." : "Tra cứu ngay";
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
    resultBox.hidden = true;
    resultBox.classList.remove("is-visible");
  }

  function clearError() {
    errorBox.hidden = true;
    errorBox.textContent = "";
  }

  // Nhãn trạng thái -> màu badge tương ứng
  function statusBadgeClass(status, isPaid) {
    if (isPaid) return "lk-badge lk-badge--paid";
    if (status === "Cần tư vấn") return "lk-badge lk-badge--consult";
    return "lk-badge lk-badge--pending";
  }

  function renderOrders(orders) {
    ordersBody.innerHTML = "";

    if (!orders.length) {
      ordersEmpty.hidden = false;
      return;
    }
    ordersEmpty.hidden = true;

    orders.forEach(function (order) {
      var tr = document.createElement("tr");

      // Dùng textContent cho mọi dữ liệu từ API (tên khách, sản phẩm...)
      // thay vì nối chuỗi HTML — dữ liệu do người dùng nhập lúc đặt hàng
      // nên không được để nó chèn thẻ HTML vào trang.
      var tdCode = document.createElement("td");
      tdCode.className = "lk-code";
      tdCode.textContent = order.orderId || "—";
      tr.appendChild(tdCode);

      var tdCustomer = document.createElement("td");
      tdCustomer.textContent = order.customerName || "—";
      tr.appendChild(tdCustomer);

      var tdProduct = document.createElement("td");
      tdProduct.textContent = order.product || "—";
      tr.appendChild(tdProduct);

      var tdValue = document.createElement("td");
      tdValue.className = "lk-num";
      var tdRate = document.createElement("td");
      tdRate.className = "lk-num";
      var tdCommission = document.createElement("td");
      tdCommission.className = "lk-num lk-money lk-money--commission";

      if (order.awaitingNetRevenue) {
        // Đơn doanh nghiệp chưa chốt giá sỉ: chưa có cơ sở tính hoa hồng.
        // Hiện "Chờ chốt giá" thay vì 0 đ để không bị hiểu là không có hoa hồng.
        tdValue.innerHTML = '<span class="lk-muted">Chờ chốt giá</span>';
        tdRate.textContent = formatPercent(order.commissionRate);
        tdCommission.innerHTML = '<span class="lk-muted">Chờ chốt giá</span>';
      } else {
        tdValue.className += " lk-money";
        tdValue.textContent = formatVnd(order.orderValue);
        tdRate.textContent = formatPercent(order.commissionRate);
        tdCommission.textContent = formatVnd(order.commissionAmount);
      }

      tr.appendChild(tdValue);
      tr.appendChild(tdRate);
      tr.appendChild(tdCommission);

      var tdStatus = document.createElement("td");
      var badge = document.createElement("span");
      badge.className = statusBadgeClass(order.status, order.isPaid);
      badge.textContent = order.status || "—";
      tdStatus.appendChild(badge);
      tr.appendChild(tdStatus);

      ordersBody.appendChild(tr);
    });
  }

  function renderResult(data) {
    var partner = data.partner || {};
    var stats = data.stats || {};
    var orders = data.orders || [];

    partnerName.textContent = partner.name || "—";
    partnerCode.textContent = partner.code || "—";
    partnerGroup.textContent = partner.groupLabel || "";
    partnerLink.textContent = partner.referralLink || "";
    partnerLink.setAttribute("href", partner.referralLink || "#");

    // Chưa tạo cột "Lượt click" bên Lark Base -> hiện "—" kèm ghi chú, chứ
    // không hiện 0 (0 dễ bị hiểu là không ai bấm link).
    if (stats.clicksTracked) {
      statClicks.textContent = new Intl.NumberFormat("vi-VN").format(stats.clicks || 0);
      statClicksNote.hidden = true;
    } else {
      statClicks.textContent = "—";
      statClicksNote.hidden = false;
    }

    statPaidOrders.textContent = stats.paidOrders || 0;
    statTotalOrders.textContent =
      "Trên tổng " + (stats.totalOrders || 0) + " đơn đã ghi nhận";
    statEarned.textContent = formatVnd(stats.earnedCommission);
    statBalance.textContent = formatVnd(stats.currentBalance);
    statPayoutStatus.textContent = stats.payoutStatus ? "Trạng thái: " + stats.payoutStatus : "";

    ratesNote.textContent =
      "Tỉ lệ hoa hồng áp dụng cho bạn (" + (partner.groupLabel || "") + "): " +
      formatPercent(partner.commissionRateB2C) + " với đơn khách lẻ (tính trên giá niêm yết) và " +
      formatPercent(partner.commissionRateB2B) + " với đơn doanh nghiệp (tính trên doanh thu thực thu sau chiết khấu sỉ). " +
      "Hoa hồng của đơn chưa thanh toán chỉ là tạm tính.";

    renderOrders(orders);

    resultBox.hidden = false;
    // Bật lại animation mỗi lần tra cứu mới
    resultBox.classList.remove("is-visible");
    void resultBox.offsetWidth;
    resultBox.classList.add("is-visible");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var query = input.value.trim();

    if (!query) {
      showError("Vui lòng nhập Số điện thoại hoặc Mã Affiliate của bạn.");
      input.focus();
      return;
    }

    clearError();
    setLoading(true);

    fetch(LOOKUP_ENDPOINT + "?q=" + encodeURIComponent(query))
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        if (!result.ok || result.data.status !== "success") {
          showError(
            result.data.message ||
            "Không tra cứu được. Vui lòng thử lại sau ít phút hoặc liên hệ hotline 0915 080 988."
          );
          return;
        }
        renderResult(result.data);
      })
      .catch(function () {
        showError("Không kết nối được máy chủ. Vui lòng kiểm tra mạng rồi thử lại nhé.");
      })
      .finally(function () {
        setLoading(false);
      });
  });

  /* ---------- Sao chép link giới thiệu ---------- */
  var copiedTimer = null;

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }).catch(fallbackCopy);
    }
    return Promise.resolve(fallbackCopy());

    function fallbackCopy() {
      try {
        var helper = document.createElement("textarea");
        helper.value = text;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.top = "-1000px";
        document.body.appendChild(helper);
        helper.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(helper);
        return ok;
      } catch (err) {
        return false;
      }
    }
  }

  partnerCopyBtn.addEventListener("click", function () {
    var link = partnerLink.getAttribute("href") || "";
    if (!link || link === "#") return;

    copyText(link).then(function (ok) {
      if (!ok) {
        alert("Không tự sao chép được. Bạn vui lòng bôi đen đường link rồi sao chép thủ công nhé.");
        return;
      }
      partnerCopied.hidden = false;
      clearTimeout(copiedTimer);
      copiedTimer = setTimeout(function () { partnerCopied.hidden = true; }, 2500);
    });
  });

  /* ---------- Tra cứu sẵn khi mở link kèm ?q= ----------
     Tiện cho việc gửi thẳng link tra cứu riêng cho từng affiliate,
     VD: vidisan.vn/tra-cuu?q=VDS10 */
  var presetQuery = new URLSearchParams(window.location.search).get("q");
  if (presetQuery) {
    input.value = presetQuery;
    form.dispatchEvent(new Event("submit", { cancelable: true }));
  }
})();
