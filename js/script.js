/* =========================================================
   VỊ DI SẢN — LANDING PAGE SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. HEADER: đổi trạng thái khi cuộn trang ---------- */
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scrollTop");

  function onScroll() {
    const scrolled = window.scrollY > 20;
    header.classList.toggle("is-scrolled", scrolled);
    scrollTopBtn.classList.toggle("is-visible", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 2. MENU MOBILE (hamburger) ---------- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  hamburger.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Đóng menu mobile khi chọn một mục điều hướng
  mainNav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- 3. TOGGLE NGÔN NGỮ (VN / EN) ---------- */
  // Giao diện tạm thời chỉ đổi trạng thái nút, chưa xử lý dịch nội dung thực tế.
  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    const options = langToggle.querySelectorAll(".lang-toggle__option");
    options.forEach((opt) => opt.classList.toggle("is-active"));
  });

  /* ---------- 4. CUỘN MƯỢT ĐẾN ANCHOR ---------- */
  // Áp dụng cho mọi liên kết nội bộ dạng #id, bao gồm các nút "Tìm hiểu thêm"
  // luôn trỏ về khu vực "BỘ SẢN PHẨM VỊ DI SẢN" (#san-pham).
  const headerOffset = () => header.offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset() + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ---------- 5. HIỆU ỨNG XUẤT HIỆN KHI CUỘN (Scroll Reveal) ---------- */
  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(index % 4) * 90}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));

  /* ---------- 6. Ô NHẬP SỐ LƯỢNG (Khách lẻ) ---------- */
  const quantityWrap = document.querySelector(".quantity-input");
  if (quantityWrap) {
    const input = quantityWrap.querySelector("input");
    quantityWrap.querySelectorAll(".quantity-input__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        let value = parseInt(input.value, 10) || 1;
        value = btn.dataset.action === "increase" ? value + 1 : Math.max(1, value - 1);
        input.value = value;
      });
    });
  }

  /* ---------- 7. FORM: chỉ xử lý giao diện, chưa gửi dữ liệu ---------- */
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // TODO: tích hợp API/gửi email khi có backend xử lý đơn hàng.
    });
  });

});
