/* =========================================================
   VỊ DI SẢN — LANDING PAGE SCRIPT
   ========================================================= */

/* ---------- TỪ ĐIỂN ĐA NGÔN NGỮ (VI / EN) ---------- */
const translations = {
  vi: {
    nav_collection: "Bộ sưu tập",
    nav_stories: "Bốn câu chuyện",
    nav_ar: "Trải nghiệm AR",
    nav_order: "Đặt hộp quà",
    nav_business: "Doanh nghiệp",

    hero_title: "VỊ DI SẢN - QUÀ TẶNG VĂN HÓA",
    hero_subtitle_1: "Trải nghiệm Hà Nội nghìn năm theo cách chưa từng có",
    hero_subtitle_2: "Sự kết hợp hoàn hảo giữa Ẩm thực - Văn hóa - Công nghệ - Trải nghiệm",
    hero_cta: "Khám phá ngay",

    stories_title: "Bốn Biểu tượng",
    stories_title_script: "Bốn Câu Chuyện",

    story1_title: "Văn Miếu - Quốc Tử Giám",
    story1_caption: "\"Đỗ - Thành Tài\"",
    story1_desc: "Dựng từ 1070 dưới thời Lý Thánh Tông, Văn Miếu là biểu tượng cho truyền thống hiếu học ngàn năm của người Hà Nội. Bánh mang hoa văn mái ngói cong và cửa sổ tròn - lời chúc đỗ đạt, thành tài gửi đến người thân yêu.",

    story2_title: "Tháp Rùa",
    story2_caption: "\"Bình Yên - Trường Tồn\"",
    story2_desc: "Giữa lòng Hồ Gươm, Tháp Rùa lặng lẽ như nhắc lại khoảnh khắc vua Lê trả gươm - hết binh đao, đất nước trở về thanh bình. Nhân sen thanh khiết trong bánh là lời chúc: một năm an yên, trường tồn cùng năm tháng.",

    story3_title: "Chùa Một Cột",
    story3_caption: "\"Sinh - Phúc Lành\"",
    story3_desc: "Ngôi chùa mọc lên từ một giấc mơ - vua Lý Thái Tông mơ thấy Quan Âm trao con trên đài sen, và điều lành hiện thực. Nhân đậu đỏ ấm áp là lời chúc: phúc lành gõ cửa nhà bạn.",

    story4_title: "Cầu Long Biên",
    story4_caption: "\"Bền - Gắn Kết\"",
    story4_desc: "Hơn một thế kỷ, cây cầu sắt già chứng kiến những gánh cốm thu đi qua sông Hồng vào phố. Nhân cốm là ký ức của Hà Nội - ăn một miếng, nhớ một thời gắn kết bền lâu.",

    btn_learn_more: "Tìm hiểu thêm",

    roadmap_title: "Hành trình di sản",
    roadmap_quote: "\"Từ Hà Nội Trong Tôi đến Bản Sắc Việt\"",
    roadmap_desc_1: "Bắt đầu cùng \"Hà Nội Trong Tôi\", chúng tôi mong muốn khắc hoạ những biểu tượng đầu tiên của mảnh đất nghìn năm văn hiến lên từng chiếc bánh nhỏ. Đây chỉ là bước khởi đầu trong hành trình dài - đưa bản sắc văn hoá Việt Nam đến gần hơn với mọi người, qua từng vùng miền, từng câu chuyện.",
    roadmap_desc_2: "Từ Hà Nội, hành trình \"Vị Di Sản\" sẽ tiếp tục lan toả tới Huế, Hội An, Sài Gòn và khắp mọi miền Tổ quốc - nơi mỗi lát cắt ký ức đều mang theo một câu chuyện dân tộc riêng biệt, chờ được kể lại theo cách chưa từng có.",

    products_title: "Bộ sản phẩm \"Vị Di Sản\"",

    ar_title: "Quét mã nghe kể chuyện",
    ar_desc: "Mỗi chiếc bánh là một mảnh ký ức. Chỉ với một lần quét mã, câu chuyện di sản ẩn mình trong từng hộp bánh sẽ được kể lại sống động ngay trên màn hình điện thoại của bạn.",
    ar_step1_title: "Mở camera điện thoại",
    ar_step1_desc: "Quét mã QR in trên hộp bánh Vị Di Sản.",
    ar_step2_title: "Xem trải nghiệm AR sống động",
    ar_step2_desc: "Công trình di sản hiện lên chân thực ngay trước mắt bạn.",
    ar_step3_title: "Nghe câu chuyện dân tộc",
    ar_step3_desc: "Lắng nghe những lát cắt ký ức được kể lại theo cách chưa từng có.",
    ar_cta: "Khám phá ở đây!",

    order_title: "Đặt hộp quà của bạn",
    order_subtitle: "Nương Bắc Và Vị Di Sản",
    order_retail_title: "Khách lẻ",
    order_retail_heading: "Hộp 4 chiếc \"Hà Nội Trong Tôi\"",
    order_retail_desc: "Bốn chiếc bánh trung thu nghệ thuật, tạo hình thủ công tại Hà Nội, đặt trong hộp gỗ sơn mài kèm thiệp giấy dó và bộ đế kể chuyện song ngữ Việt - Anh.",
    order_price_tinhhoa_label: "Hộp Vị Di Sản - Tinh Hoa",
    order_price_tinhhoa_old: "863.000 đ",
    order_price_tinhhoa_value: "799.000 đ / hộp",
    order_price_tuyenchon_label: "Hộp Vị Di Sản - Tuyển Chọn",
    order_price_tuyenchon_old: "1.079.000 đ",
    order_price_tuyenchon_value: "999.000 đ / hộp",
    order_price_single_label: "Bánh lẻ",
    order_price_single_old: "159.000 đ",
    order_price_single_value: "99.000 đ / chiếc",
    order_price_badge: "🎁 Mức giá ưu đãi độc quyền đặt hàng trực tuyến trên website (Đã bao gồm VAT)",
    order_shipping_note: "🚚 Giá trên chưa gồm phí vận chuyển. Nương Bắc sẽ tra cước sau khi đóng gói và báo cho bạn qua email, phí này thanh toán khi nhận hàng.",
    promo_title: "Ưu đãi mừng Quốc khánh 2/9",
    promo_desc: "Bánh lẻ chỉ còn 99.000 đ / chiếc — áp dụng tới hết ngày 02/09.",
    promo_tag: "Ưu đãi 2/9",
    promo_ends: "Kết thúc sau",
    promo_d: "Ngày",
    promo_h: "Giờ",
    promo_m: "Phút",
    promo_s: "Giây",
    order_btn_box4: "Đặt hộp quà",
    order_btn_single: "Mua Bánh lẻ",
    chatbot_title: "Trợ lý Vị Di Sản",
    chatbot_hotline_label: "Cần hỗ trợ nhanh? Gọi",
    chatbot_placeholder: "Nhập câu hỏi của bạn...",

    order_business_title: "Doanh nghiệp - Ngoại giao",
    order_business_product: "Quà tặng số lượng lớn theo yêu cầu",
    order_business_desc_1: "Khắc logo lên hộp gỗ, in thiệp riêng song ngữ, chọn cấu hình hộp theo nhân sự và đối tác. Tư vấn 1–1 với đội ngũ thiết kế của Vị Di Sản.",
    order_business_desc_2: "Đặt số lượng từ 20 hộp trở lên, vui lòng liên hệ trực tiếp để được tư vấn ưu đãi và lịch giao hàng.",
    order_contact_phone_label: "Điện thoại",
    order_contact_email_label: "Email",

    label_fullname: "Họ và tên",
    placeholder_fullname: "Nhập họ tên của bạn",
    label_company: "Đơn vị",
    placeholder_company: "Nhập tên đơn vị",
    label_email: "Email",
    placeholder_email: "Nhập email của bạn",
    label_qty_order: "Số lượng",
    placeholder_qty_order: "Nhập số lượng cần đặt",
    label_total: "Tổng tiền",
    label_request: "Yêu cầu cụ thể",
    placeholder_request: "Mô tả yêu cầu của bạn",
    order_response_note: "Phản hồi trong 24 giờ làm việc.",
    order_btn_submit: "Gửi yêu cầu!",

    affiliate_title: "Trở thành Affiliate của Vị Di Sản",
    affiliate_desc: "Giới thiệu Vị Di Sản tới bạn bè, người thân — nhận hoa hồng cho mỗi đơn hàng thành công qua đường link giới thiệu riêng của bạn.",
    affiliate_benefit1: "Hoa hồng hấp dẫn cho mỗi đơn hàng thành công qua link của bạn",
    affiliate_benefit2: "Có mã Affiliate và đường link giới thiệu riêng",
    affiliate_benefit3: "Nhận thông báo hoa hồng và cập nhật qua email",
    affiliate_response_note: "Chúng tôi sẽ gửi mã Affiliate và link giới thiệu riêng của bạn qua email sau khi đăng ký thành công.",
    affiliate_btn_submit: "Đăng ký ngay",
    label_bank: "Ngân hàng",
    placeholder_bank: "VD: Vietcombank",
    label_bank_account: "Số tài khoản",
    placeholder_bank_account: "Nhập số tài khoản nhận hoa hồng",
    affiliate_result_code_label: "Mã Affiliate của bạn",
    affiliate_result_link_label: "Link giới thiệu riêng của bạn",
    affiliate_copy_btn: "Sao chép",
    affiliate_copied: "✓ Đã sao chép!",
    affiliate_zalo_title: "Tham gia nhóm Zalo Affiliate Vị Di Sản",
    affiliate_zalo_desc: "Nơi bạn nhận trọn bộ hình ảnh sản phẩm, nội dung mẫu và tài liệu truyền thông có sẵn — cùng đội ngũ Vị Di Sản đồng hành, giải đáp và cập nhật chương trình ưu đãi sớm nhất.",
    affiliate_zalo_btn: "Tham gia nhóm Zalo",
    affiliate_lookup_link: "📊 Tra cứu số liệu & hoa hồng của bạn",

    modal_title: "Đặt hàng",
    label_phone: "Điện thoại",
    placeholder_phone: "Nhập số điện thoại",
    label_address: "Địa chỉ",
    placeholder_address: "Nhập địa chỉ giao hàng",
    label_product: "Sản phẩm",
    label_flavors: "Chọn vị bánh yêu thích",
    label_notes: "Ghi chú",
    placeholder_notes: "Ghi chú thêm (nếu có)",
    modal_delivery_note: "Giao nội thành Hà Nội trong 1-2 ngày.",
    modal_submit: "Xác nhận đặt hàng",
    label_phone_required: "Số điện thoại *",

    payment_success_title: "Đặt hàng thành công!",
    payment_order_label: "Mã đơn hàng:",
    qr_order_warning: "Quý khách vui lòng không tự ý thay đổi nội dung chuyển khoản — mỗi đơn hàng đã có nội dung thanh toán riêng để hệ thống tự động xác nhận. Chúng tôi sẽ báo email ngay sau khi thanh toán thành công.",
    qr_order_support: "Nếu gặp bất kỳ vấn đề gì, vui lòng liên hệ ngay hotline",
    qr_bank_label: "Ngân hàng",
    qr_account_number_label: "Số tài khoản",
    qr_account_name_label: "Chủ tài khoản",
    qr_amount_label: "Số tiền",
    btn_close: "Đóng",

    footer_brand_desc: "Bánh trung thu nghệ thuật, thủ công tại Hà Nội. Quà tặng văn hóa cho thế giới.",
    footer_copyright: "© 2026 VỊ DI SẢN - Lát cắt ký ức - câu chuyện dân tộc. Bản quyền ý tưởng và sáng tạo sản phẩm thuộc về Công ty TNHH Nương Bắc.",

    footer_nav_title: "Bộ sưu tập",
    footer_nav_item1: "Hà Nội Trong Tôi",
    footer_nav_item3: "Trải nghiệm QR",
    footer_nav_item4: "Sắp ra mắt",

    footer_services_title: "Dịch vụ",
    footer_service_item1: "Đặt hộp lẻ",
    footer_service_item2: "Quà tặng B2B",
    footer_service_item3: "Ngoại giao",
    footer_service_item4: "Vận chuyển quốc tế",

    footer_contact_title: "Liên hệ",
  },

  en: {
    nav_collection: "Collection",
    nav_stories: "Four Stories",
    nav_ar: "AR Experience",
    nav_order: "Order a Gift Box",
    nav_business: "Business",

    hero_title: "VỊ DI SẢN - CULTURAL GIFT",
    hero_subtitle_1: "Experience a thousand years of Hanoi like never before",
    hero_subtitle_2: "A perfect blend of Gastronomy - Culture - Technology - Experience",
    hero_cta: "Explore Now",

    stories_title: "Four Symbols",
    stories_title_script: "Four Stories",

    story1_title: "Temple of Literature",
    story1_caption: "\"Success - Achievement\"",
    story1_desc: "Built in 1070 under King Lý Thánh Tông, the Temple of Literature stands for a thousand years of Hanoi's devotion to learning. The cake carries the curved tiled roof and round window - a wish of success and achievement for your loved ones.",

    story2_title: "Turtle Tower",
    story2_caption: "\"Peace - Eternity\"",
    story2_desc: "In the heart of Hoàn Kiếm Lake, Turtle Tower stands quietly, echoing the moment King Lê returned the sacred sword - when war gave way to peace. The pure lotus filling is a wish for a peaceful year that endures through time.",

    story3_title: "One Pillar Pagoda",
    story3_caption: "\"Birth - Blessing\"",
    story3_desc: "Born from a dream - King Lý Thái Tông envisioned Quan Âm handing him a child upon a lotus throne, and the dream became reality. The warm red bean filling carries a wish: may blessings find their way to your door.",

    story4_title: "Long Biên Bridge",
    story4_caption: "\"Resilience - Connection\"",
    story4_desc: "For over a century, this old iron bridge has watched autumn cốm vendors cross the Red River into the city. The cốm filling is Hanoi's living memory - one bite, one lasting connection.",

    btn_learn_more: "Learn More",

    roadmap_title: "Heritage Journey",
    roadmap_quote: "\"From Hanoi In My Heart to Vietnamese Identity\"",
    roadmap_desc_1: "Beginning with \"Hanoi In My Heart\", we set out to capture the first symbols of this thousand-year-old land in every small cake. This is only the first step of a much longer journey - bringing Vietnamese culture closer to everyone, one region and one story at a time.",
    roadmap_desc_2: "From Hanoi, the \"Vị Di Sản\" journey will continue to spread to Huế, Hội An, Sài Gòn and every corner of the homeland - where every slice of memory carries its own story, waiting to be told like never before.",

    products_title: "The \"Vị Di Sản\" Collection",

    ar_title: "Scan to Hear the Story",
    ar_desc: "Every cake holds a fragment of memory. With a single scan, the heritage story hidden within each box comes vividly to life right on your phone screen.",
    ar_step1_title: "Open your phone camera",
    ar_step1_desc: "Scan the QR code printed on the Vị Di Sản box.",
    ar_step2_title: "Watch the AR experience come alive",
    ar_step2_desc: "The heritage monument appears vividly right before your eyes.",
    ar_step3_title: "Listen to the nation's story",
    ar_step3_desc: "Listen to fragments of memory told like never before.",
    ar_cta: "Discover It Here!",

    order_title: "Order Your Gift Box",
    order_subtitle: "Nương Bắc & Vị Di Sản",
    order_retail_title: "Individual Customers",
    order_retail_heading: "Set of 4 \"Hanoi In My Heart\" Cakes",
    order_retail_desc: "Four artisan mooncakes handcrafted in Hanoi, presented in a lacquered wooden box with a dó-paper card and a bilingual Vietnamese-English storytelling stand.",
    order_price_tinhhoa_label: "Vị Di Sản Box - Tinh Hoa",
    order_price_tinhhoa_old: "863,000 VND",
    order_price_tinhhoa_value: "799,000 VND / box",
    order_price_tuyenchon_label: "Vị Di Sản Box - Tuyển Chọn",
    order_price_tuyenchon_old: "1,079,000 VND",
    order_price_tuyenchon_value: "999,000 VND / box",
    order_price_single_label: "Single Cake",
    order_price_single_old: "159,000 VND",
    order_price_single_value: "99,000 VND / cake",
    order_price_badge: "🎁 Exclusive online pricing — website orders only (VAT included)",
    order_shipping_note: "🚚 Prices exclude shipping. We will calculate the fee once your order is packed, email it to you, and collect it on delivery.",
    promo_title: "National Day offer",
    promo_desc: "Single cakes are 99,000 VND each — until end of 2 September.",
    promo_tag: "2/9 offer",
    promo_ends: "Ends in",
    promo_d: "Days",
    promo_h: "Hrs",
    promo_m: "Min",
    promo_s: "Sec",
    order_btn_box4: "Order a Gift Box",
    order_btn_single: "Buy a Single Cake",
    chatbot_title: "Vị Di Sản Assistant",
    chatbot_hotline_label: "Need quick help? Call",
    chatbot_placeholder: "Type your question...",

    order_business_title: "Business & Corporate Gifting",
    order_business_product: "Bulk gifts tailored to your needs",
    order_business_desc_1: "Engrave your logo on the wooden box, print bilingual cards, and choose a box configuration for your staff and partners. Get 1-on-1 guidance from the Vị Di Sản design team.",
    order_business_desc_2: "For orders of 20 boxes or more, please contact us directly for preferred pricing and delivery scheduling.",
    order_contact_phone_label: "Phone",
    order_contact_email_label: "Email",

    label_fullname: "Full Name",
    placeholder_fullname: "Enter your full name",
    label_company: "Company",
    placeholder_company: "Enter your company name",
    label_email: "Email",
    placeholder_email: "Enter your email",
    label_qty_order: "Quantity",
    placeholder_qty_order: "Enter the quantity needed",
    label_total: "Total",
    label_request: "Specific Request",
    placeholder_request: "Describe what you need",
    order_response_note: "We respond within 24 business hours.",
    order_btn_submit: "Submit Request!",

    affiliate_title: "Become a Vị Di Sản Affiliate",
    affiliate_desc: "Refer Vị Di Sản to friends and family — earn a commission on every successful order through your own referral link.",
    affiliate_benefit1: "Attractive commission on every successful order via your link",
    affiliate_benefit2: "Get your own Affiliate code and referral link",
    affiliate_benefit3: "Receive commission updates and news by email",
    affiliate_response_note: "We'll email you your Affiliate code and personal referral link right after you register.",
    affiliate_btn_submit: "Register Now",
    label_bank: "Bank",
    placeholder_bank: "e.g. Vietcombank",
    label_bank_account: "Account Number",
    placeholder_bank_account: "Enter the account to receive commission",
    affiliate_result_code_label: "Your Affiliate code",
    affiliate_result_link_label: "Your personal referral link",
    affiliate_copy_btn: "Copy",
    affiliate_copied: "✓ Copied!",
    affiliate_zalo_title: "Join the Vị Di Sản Affiliate Zalo group",
    affiliate_zalo_desc: "Get the full set of product photos, ready-made captions and marketing materials — plus the Vị Di Sản team on hand to answer questions and share new promotions first.",
    affiliate_zalo_btn: "Join the Zalo group",
    affiliate_lookup_link: "📊 Check your stats & commission",

    modal_title: "Place Your Order",
    label_phone: "Phone Number",
    placeholder_phone: "Enter your phone number",
    label_address: "Address",
    placeholder_address: "Enter your delivery address",
    label_product: "Product",
    label_flavors: "Choose your favorite flavors",
    label_notes: "Notes",
    placeholder_notes: "Any additional notes",
    modal_delivery_note: "Delivered within Hanoi city in 1-2 days.",
    modal_submit: "Confirm Order",
    label_phone_required: "Phone Number *",

    payment_success_title: "Order placed successfully!",
    payment_order_label: "Order code:",
    qr_order_warning: "Please do not change the transfer note yourself — each order has its own unique payment note so our system can confirm it automatically. We will email you right after payment is confirmed.",
    qr_order_support: "If you run into any issue, please contact our hotline right away at",
    qr_bank_label: "Bank",
    qr_account_number_label: "Account Number",
    qr_account_name_label: "Account Holder",
    qr_amount_label: "Amount",
    btn_close: "Close",

    footer_brand_desc: "Artisan mooncakes, handcrafted in Hanoi. A cultural gift for the world.",
    footer_copyright: "© 2026 VỊ DI SẢN - A slice of memory, a story of the nation. Concept and product design owned by Nương Bắc Co., Ltd.",

    footer_nav_title: "Collection",
    footer_nav_item1: "Hanoi In My Heart",
    footer_nav_item3: "QR Experience",
    footer_nav_item4: "Coming Soon",

    footer_services_title: "Services",
    footer_service_item1: "Order Individually",
    footer_service_item2: "B2B Gifting",
    footer_service_item3: "Diplomatic Gifts",
    footer_service_item4: "International Shipping",

    footer_contact_title: "Contact",
  },
};

let currentLang = "vi";

/* ---------- BẢNG GIÁ SẢN PHẨM (giá niêm yết, ĐÃ GỒM VAT) ----------
   Khoá phải khớp CHÍNH XÁC với value của các <option> trong #modalSanPham
   và với PRICE_TABLE trong worker.js — nếu đổi tên sản phẩm, đổi cả 3 chỗ.
   Giá đã bao gồm VAT nên "Tổng tiền" = Giá x Số lượng, KHÔNG cộng thêm gì
   nữa (xem calculateTotal). */
const PRICE_TABLE = {
  "Hộp Vị Di Sản - Tinh Hoa": 799000,
  "Hộp Vị Di Sản - Tuyển Chọn": 999000,
  "Bánh lẻ": 159000,
};

/* ---------- KHUYẾN MÃI TRƯỚC LỄ 2/9 ----------
   Bánh lẻ còn 99.000đ tới hết ngày 02/09, sau đó tự về 159.000đ. Hết hạn
   là trang tự đổi lại giá và ẩn đồng hồ, không ai phải vào sửa tay.

   Mốc thời gian ghi kèm múi giờ +07:00 để máy khách đặt lệch múi giờ vẫn
   đếm về đúng nửa đêm giờ Việt Nam.

   Bảng này CHỈ để hiển thị. Số tiền thật của đơn hàng do Worker tính lại
   từ tên sản phẩm + số lượng (xem getUnitPrice trong worker.js), nên máy
   khách chỉnh đồng hồ hay sửa giá trong trình duyệt đều không ăn thua.
   Đổi đợt khuyến mãi thì sửa cả 2 hằng số cùng tên bên worker.js. */
const PROMO_END_AT = Date.parse("2026-09-02T23:59:59+07:00");
const PROMO_PRICE_TABLE = {
  "Bánh lẻ": 99000,
};

function isPromoActive(now) {
  return (now === undefined ? Date.now() : now) <= PROMO_END_AT;
}

function getUnitPrice(sanPham) {
  if (isPromoActive() && PROMO_PRICE_TABLE[sanPham]) return PROMO_PRICE_TABLE[sanPham];
  return PRICE_TABLE[sanPham];
}

function calculateTotal(unitPrice, qty) {
  return unitPrice * qty;
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.documentElement.lang = lang;
  currentLang = lang;

  // applyTranslations vừa ghi đè mọi [data-i18n] bằng giá khuyến mãi trong
  // từ điển. Nếu đợt khuyến mãi đã kết thúc thì phải trả giá gốc về ngay —
  // nếu không, đổi ngôn ngữ sẽ làm giá 99.000đ hiện lại sau khi hết hạn.
  refreshPromoUI();
}

/* ---------- ĐỒNG HỒ ĐẾM NGƯỢC KHUYẾN MÃI 2/9 ----------
   Còn hạn: hiện khối đếm ngược, giữ giá 99.000đ trong từ điển.
   Hết hạn: ẩn khối, trả nhãn giá bánh lẻ về 159.000đ (gạch ngang 172.000đ).

   Đồng hồ chỉ để hiển thị. Máy khách chỉnh sai giờ cùng lắm là nhìn thấy
   giá sai — Worker vẫn tính tiền theo giờ máy chủ khi ghi đơn. */
const PROMO_PRICE_LABELS = {
  vi: { old: "172.000 đ", value: "159.000 đ / chiếc" },
  en: { old: "172,000 VND", value: "159,000 VND / cake" },
};

function refreshPromoUI() {
  const promoBox = document.getElementById("promoBanner");
  const stillOn = isPromoActive();

  if (promoBox) promoBox.hidden = !stillOn;
  if (stillOn) return;

  // Hết hạn -> ghi đè nhãn giá bánh lẻ về giá gốc.
  const labels = PROMO_PRICE_LABELS[currentLang] || PROMO_PRICE_LABELS.vi;
  document.querySelectorAll('[data-i18n="order_price_single_old"]').forEach((el) => {
    el.textContent = labels.old;
  });
  document.querySelectorAll('[data-i18n="order_price_single_value"]').forEach((el) => {
    el.textContent = labels.value;
  });
}

function startPromoCountdown() {
  const box = document.getElementById("promoBanner");
  if (!box) return;

  const dEl = document.getElementById("promoD");
  const hEl = document.getElementById("promoH");
  const mEl = document.getElementById("promoM");
  const sEl = document.getElementById("promoS");
  if (!dEl || !hEl || !mEl || !sEl) return;

  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const left = PROMO_END_AT - Date.now();

    if (left <= 0) {
      refreshPromoUI();
      clearInterval(timer);
      return;
    }

    const totalSeconds = Math.floor(left / 1000);
    dEl.textContent = String(Math.floor(totalSeconds / 86400));
    hEl.textContent = pad(Math.floor(totalSeconds / 3600) % 24);
    mEl.textContent = pad(Math.floor(totalSeconds / 60) % 60);
    sEl.textContent = pad(totalSeconds % 60);
  }

  tick();
  const timer = setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 0. KHUYẾN MÃI 2/9: đồng hồ đếm ngược ---------- */
  refreshPromoUI();
  startPromoCountdown();

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
  const langToggle = document.getElementById("langToggle");
  const langOptions = langToggle.querySelectorAll(".lang-toggle__option");

  langToggle.addEventListener("click", (e) => {
    const target = e.target.closest(".lang-toggle__option");
    const nextLang = target ? target.dataset.lang : (currentLang === "vi" ? "en" : "vi");

    if (nextLang === currentLang) return;

    langOptions.forEach((opt) => opt.classList.toggle("is-active", opt.dataset.lang === nextLang));
    applyTranslations(nextLang);
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

  /* ---------- 7. FORM: fallback chặn submit mặc định cho các form chưa có xử lý riêng ---------- */
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });

  /* ---------- 8. POPUP ĐẶT HÀNG (Modal): mở / đóng ---------- */
  const orderModalOverlay = document.getElementById("orderModalOverlay");
  const orderModalClose = document.getElementById("orderModalClose");
  const orderModalSelect = document.getElementById("modalSanPham");
  const btnOrderBox4 = document.getElementById("btnOrderBox4");
  const btnOrderSingle = document.getElementById("btnOrderSingle");
  const modalFormFields = document.getElementById("modalFormFields");
  const orderModalResult = document.getElementById("orderModalResult");
  const orderModalFormEl = document.getElementById("orderModalForm");

  function openOrderModal(productIndex) {
    if (orderModalSelect && typeof productIndex === "number") {
      orderModalSelect.selectedIndex = productIndex;
    }
    orderModalOverlay.classList.add("is-active");
    orderModalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    updateFlavorSectionVisibility();
    updateModalQuantityAndTotal();
  }

  function closeOrderModal() {
    orderModalOverlay.classList.remove("is-active");
    orderModalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Nếu popup đang ở màn hình kết quả (đã đặt hàng xong), đợi hiệu ứng đóng
    // xong rồi mới reset lại về form trống — để lần mở tiếp theo bắt đầu sạch.
    setTimeout(() => {
      if (orderModalResult && !orderModalResult.hidden) {
        orderModalResult.hidden = true;
        modalFormFields.hidden = false;
        orderModalFormEl.reset();
        updateFlavorSectionVisibility();
        updateModalQuantityAndTotal();
      }
    }, 350);
  }

  if (orderModalOverlay && btnOrderBox4 && btnOrderSingle && orderModalClose) {
    btnOrderBox4.addEventListener("click", () => openOrderModal(0));
    btnOrderSingle.addEventListener("click", () => openOrderModal(2));

    orderModalClose.addEventListener("click", closeOrderModal);

    // Đóng khi click ra ngoài (trên lớp overlay mờ, không phải bên trong modal)
    orderModalOverlay.addEventListener("click", (e) => {
      if (e.target === orderModalOverlay) closeOrderModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && orderModalOverlay.classList.contains("is-active")) {
        closeOrderModal();
      }
    });
  }

  const orderModalDoneBtn = document.getElementById("orderModalDone");
  if (orderModalDoneBtn) {
    orderModalDoneBtn.addEventListener("click", closeOrderModal);
  }

  /* ---------- 9. SỐ LƯỢNG + PHÂN BỔ VỊ BÁNH (Modal) ----------
     "Số lượng" được gõ tay tự do (để mua nhiều hộp/nhiều bánh cùng lúc) và
     là số quyết định "Tổng tiền" = Số lượng * đơn giá Sản phẩm đang chọn.
     4 ô vị bánh bên dưới chỉ là phân bổ THAM KHẢO (không bắt buộc, không
     drive Số lượng) — nếu tổng phân bổ vượt quá Số lượng thì chỉ cảnh báo,
     không chặn gửi đơn. */
  const modalQtyInput = document.getElementById("modalSoLuong");
  const flavorQtyInputs = Array.from(document.querySelectorAll("#orderModalForm .flavor-qty__input"));
  const flavorWarning = document.getElementById("flavorWarning");
  const modalTotalAmount = document.getElementById("modalTotalAmount");
  const modalFlavorsSection = document.getElementById("modalFlavorsSection");

  // Hộp nguyên bản (Tinh Hoa / Tuyển Chọn) đã có sẵn bộ vị tiêu chuẩn —
  // chỉ "Bánh lẻ" mới cho khách tự phân bổ số lượng theo từng vị.
  function isBanhLeSelected() {
    return orderModalSelect && orderModalSelect.value === "Bánh lẻ";
  }

  function updateFlavorSectionVisibility() {
    if (!modalFlavorsSection) return;
    const show = isBanhLeSelected();
    modalFlavorsSection.hidden = !show;
    if (!show) {
      flavorQtyInputs.forEach((input) => { input.value = 0; });
      if (flavorWarning) flavorWarning.hidden = true;
    }
  }

  function getTotalFlavorQty() {
    return flavorQtyInputs.reduce((sum, input) => sum + (Math.max(0, parseInt(input.value, 10) || 0)), 0);
  }

  function updateModalQuantityAndTotal() {
    const qty = Math.max(1, parseInt(modalQtyInput.value, 10) || 0);
    const unitPrice = getUnitPrice(orderModalSelect.value) || 0;
    if (modalTotalAmount) modalTotalAmount.textContent = formatVnd(calculateTotal(unitPrice, qty));

    if (flavorWarning && isBanhLeSelected()) {
      const flavorTotal = getTotalFlavorQty();
      const overLimit = flavorTotal > qty;
      flavorWarning.hidden = !overLimit;
      if (overLimit) {
        flavorWarning.textContent = `Tổng số lượng theo vị (${flavorTotal}) đang vượt quá Số lượng (${qty}) bạn đã nhập.`;
      }
    }
  }

  if (modalQtyInput) {
    modalQtyInput.addEventListener("input", () => {
      if (modalQtyInput.value !== "" && parseInt(modalQtyInput.value, 10) < 1) modalQtyInput.value = 1;
      updateModalQuantityAndTotal();
    });
    flavorQtyInputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value !== "" && parseInt(input.value, 10) < 0) input.value = 0;
        updateModalQuantityAndTotal();
      });
    });
    if (orderModalSelect) {
      orderModalSelect.addEventListener("change", () => {
        updateFlavorSectionVisibility();
        updateModalQuantityAndTotal();
      });
    }
    updateFlavorSectionVisibility();
    updateModalQuantityAndTotal();
  }

  /* ---------- 10. GỬI ĐƠN HÀNG VỀ BACKEND ---------- */

  const API_ENDPOINT = "https://vidisanar-api.tranchuyen091289.workers.dev/api/order";

  // Chỉ còn duy nhất Vietcombank (đã bỏ tuỳ chọn MB Bank).
  const VCB_BANK = { code: "VCB", account: "0451000402887", accountName: "CONG TY TNHH NUONG BAC" };

  // Đọc mã Affiliate từ URL (?ref=ABC123) và nhớ lại trong 30 ngày qua
  // localStorage — khách bấm link giới thiệu, tắt tab, vài hôm sau quay lại
  // đặt hàng (không còn ?ref= trên URL) thì vẫn tính đúng người giới thiệu.
  const AFFILIATE_REF_STORAGE_KEY = "vds_affiliate_ref";
  const AFFILIATE_REF_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 ngày

  function getAffiliateCode() {
    const params = new URLSearchParams(window.location.search);
    const refFromUrl = params.get("ref");

    if (refFromUrl) {
      try {
        localStorage.setItem(
          AFFILIATE_REF_STORAGE_KEY,
          JSON.stringify({ code: refFromUrl, savedAt: Date.now() })
        );
      } catch {
        // localStorage có thể bị chặn (VD chế độ duyệt web riêng tư) — bỏ
        // qua, vẫn dùng thẳng mã đọc được từ URL cho lần đặt hàng này.
      }
      return refFromUrl;
    }

    try {
      const raw = localStorage.getItem(AFFILIATE_REF_STORAGE_KEY);
      if (!raw) return "";
      const { code, savedAt } = JSON.parse(raw);
      if (!code || !savedAt || Date.now() - savedAt > AFFILIATE_REF_TTL_MS) {
        localStorage.removeItem(AFFILIATE_REF_STORAGE_KEY);
        return "";
      }
      return code;
    } catch {
      return "";
    }
  }

  // Đếm lượt click vào link giới thiệu (hiển thị ở trang /tra-cuu). Mỗi
  // máy chỉ đếm 1 lần/ngày cho mỗi mã: vừa tránh 1 người F5 nhiều lần làm
  // sai số liệu, vừa đỡ tốn quota API Lark. Lỗi ở đây luôn được nuốt để
  // không bao giờ ảnh hưởng tới việc đặt hàng.
  const CLICK_TRACK_ENDPOINT = "https://vidisanar-api.tranchuyen091289.workers.dev/api/track-click";
  const CLICK_TRACKED_STORAGE_KEY = "vds_click_tracked";

  function trackAffiliateClick() {
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (!ref) return; // chỉ đếm khi khách thực sự vào bằng link ?ref=

    const today = new Date().toISOString().slice(0, 10);
    const marker = `${ref}|${today}`;
    try {
      if (localStorage.getItem(CLICK_TRACKED_STORAGE_KEY) === marker) return;
      localStorage.setItem(CLICK_TRACKED_STORAGE_KEY, marker);
    } catch {
      // localStorage bị chặn -> vẫn đếm, chỉ là không chặn được trùng.
    }

    fetch(CLICK_TRACK_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref }),
      keepalive: true,
    }).catch(() => {});
  }

  trackAffiliateClick();

  function formatVnd(amount) {
    const n = Number(amount) || 0;
    return `${new Intl.NumberFormat("vi-VN").format(n)} đ`;
  }

  function buildVietQrUrl(amount, orderId) {
    const params = new URLSearchParams({
      amount: amount,
      addInfo: orderId,
      accountName: VCB_BANK.accountName,
    });
    return `https://img.vietqr.io/image/${VCB_BANK.code}-${VCB_BANK.account}-compact2.png?${params.toString()}`;
  }

  // Trả về { thapRua, chuaMotCot, vanMieu, cauLongBien } — mỗi vị bánh giờ
  // là một cột số riêng trong Lark Base, nên gửi thẳng 4 field rời thay vì
  // gộp thành một chuỗi.
  function collectFlavorQuantities() {
    const result = {};
    flavorQtyInputs.forEach((input) => {
      result[input.dataset.field] = parseInt(input.value, 10) || 0;
    });
    return result;
  }

  // Gửi đơn hàng lên backend, trả về { order_id, total_amount, ... } khi thành công.
  async function submitOrder(payload) {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.order_id) {
      throw new Error(data.message || "Không thể gửi đơn hàng, vui lòng thử lại sau.");
    }
    return data;
  }

  /* ---------- 11. FORM DOANH NGHIỆP: submit + thông báo kết quả (Luồng A) ---------- */
  const formDoanhNghiep = document.getElementById("formDoanhNghiep");
  const businessFormFields = document.getElementById("businessFormFields");
  const businessSuccess = document.getElementById("businessSuccess");
  const businessSuccessText = document.getElementById("businessSuccessText");

  if (formDoanhNghiep) {
    formDoanhNghiep.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = formDoanhNghiep.querySelector('button[type="submit"]');

      const payload = {
        loaiKhachHang: "doanh_nghiep",
        hoTen: formDoanhNghiep.hoTen.value.trim(),
        soDienThoai: formDoanhNghiep.soDienThoaiDN.value.trim(),
        donVi: formDoanhNghiep.donVi.value.trim(),
        email: formDoanhNghiep.email.value.trim(),
        soLuong: formDoanhNghiep.soLuongDat.value.trim(),
        yeuCau: formDoanhNghiep.yeuCau.value.trim(),
        affiliateCode: getAffiliateCode(),
      };

      if (!payload.hoTen || !payload.soDienThoai) {
        alert("Vui lòng nhập Họ tên và Số điện thoại.");
        return;
      }

      submitBtn.disabled = true;
      try {
        const result = await submitOrder(payload);
        const lang = document.documentElement.lang === "en" ? "en" : "vi";
        const msg = lang === "en"
          ? `Thank you! Your consultation request (Ref: ${result.order_id}) has been received. The Vị Di Sản team will contact you at your phone number as soon as possible.`
          : `Cảm ơn Quý doanh nghiệp! Yêu cầu tư vấn (Mã: ${result.order_id}) đã được ghi nhận. Đội ngũ Vị Di Sản sẽ liên hệ lại qua số điện thoại của quý khách trong thời gian sớm nhất.`;
        businessSuccessText.textContent = msg;
        businessFormFields.hidden = true;
        businessSuccess.hidden = false;
      } catch (err) {
        alert(err.message);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- 12. FORM KHÁCH LẺ (Modal): submit + màn hình thanh toán (Luồng B) ---------- */
  if (orderModalFormEl) {
    const resultOrderId = document.getElementById("resultOrderId");
    const qrImage = document.getElementById("qrImage");
    const qrBankName = document.getElementById("qrBankName");
    const qrAccountNumber = document.getElementById("qrAccountNumber");
    const qrAccountName = document.getElementById("qrAccountName");
    const qrAmount = document.getElementById("qrAmount");

    let currentOrder = null; // { order_id, total_amount }

    function renderQr() {
      if (!currentOrder) return;
      qrImage.src = buildVietQrUrl(currentOrder.total_amount, currentOrder.order_id);
      qrBankName.textContent = "Vietcombank";
      qrAccountNumber.textContent = VCB_BANK.account;
      qrAccountName.textContent = VCB_BANK.accountName;
      qrAmount.textContent = formatVnd(currentOrder.total_amount);
    }

    orderModalFormEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = orderModalFormEl.querySelector('.order-modal__submit');

      const payload = {
        loaiKhachHang: "khach_le",
        hoTen: orderModalFormEl.hoTen.value.trim(),
        soDienThoai: orderModalFormEl.dienThoai.value.trim(),
        email: orderModalFormEl.email.value.trim(),
        diaChi: orderModalFormEl.diaChi.value.trim(),
        sanPham: orderModalSelect.value,
        soLuong: modalQtyInput.value,
        ...collectFlavorQuantities(),
        ghiChu: orderModalFormEl.ghiChu.value.trim(),
        affiliateCode: getAffiliateCode(),
      };

      if (!payload.hoTen || !payload.soDienThoai || !payload.email || !payload.diaChi) {
        alert("Vui lòng nhập đủ Họ tên, Điện thoại, Email và Địa chỉ giao hàng.");
        return;
      }

      if (!payload.soLuong || parseInt(payload.soLuong, 10) < 1) {
        alert("Vui lòng nhập Số lượng hợp lệ (tối thiểu 1).");
        return;
      }

      submitBtn.disabled = true;
      try {
        const result = await submitOrder(payload);
        currentOrder = result;
        resultOrderId.textContent = result.order_id;
        modalFormFields.hidden = true;
        orderModalResult.hidden = false;
        renderQr();
      } catch (err) {
        alert(err.message);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- 13. FORM ĐĂNG KÝ AFFILIATE: submit + thông báo kết quả ---------- */
  const AFFILIATE_REGISTER_ENDPOINT = "https://vidisanar-api.tranchuyen091289.workers.dev/api/affiliate/register";

  // CẤU HÌNH NHÓM ZALO HỖ TRỢ AFFILIATE — điền link mời nhóm Zalo vào đây
  // (dạng https://zalo.me/g/xxxxxx). Để TRỐNG thì toàn bộ khối mời vào nhóm
  // Zalo tự ẩn khỏi màn hình thành công, không hiện nút bấm dẫn tới link
  // chết. Nhớ điền link tương ứng vào ZALO_GROUP_URL trong worker.js nữa
  // thì email gửi cho affiliate mới kèm được lời mời vào nhóm.
  const ZALO_GROUP_URL = "https://zalo.me/g/nxmgxed8dkwhznztgrnr";
  // Ảnh QR nhóm Zalo: thả file ảnh vào thư mục gốc của web (cùng chỗ với
  // index.html) rồi ghi đúng tên file KÈM ĐUÔI ở đây. Để trống thì chỉ hiện
  // nút bấm, không hiện ảnh QR. Nếu tên file sai/ảnh không tải được thì ảnh
  // tự ẩn (xem onerror bên dưới), nút tham gia nhóm vẫn hoạt động bình thường.
  const ZALO_QR_IMAGE = "91f58598-825c-4889-831c-c6bfd70167ed.jpg";

  const affiliateRegisterForm = document.getElementById("affiliateRegisterForm");
  const affiliateFormFields = document.getElementById("affiliateFormFields");
  const affiliateSuccess = document.getElementById("affiliateSuccess");
  const affiliateSuccessText = document.getElementById("affiliateSuccessText");
  const affiliateResult = document.getElementById("affiliateResult");
  const affiliateResultCode = document.getElementById("affiliateResultCode");
  const affiliateResultLink = document.getElementById("affiliateResultLink");
  const affiliateCopyBtn = document.getElementById("affiliateCopyBtn");
  const affiliateCopied = document.getElementById("affiliateCopied");
  const affiliateZalo = document.getElementById("affiliateZalo");
  const affiliateZaloQr = document.getElementById("affiliateZaloQr");
  const affiliateZaloBtn = document.getElementById("affiliateZaloBtn");

  // Copy vào clipboard: ưu tiên Clipboard API (chỉ chạy trên HTTPS), tự lùi
  // về cách cũ execCommand khi trình duyệt/ngữ cảnh không hỗ trợ.
  async function copyTextToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      /* rơi xuống cách dự phòng bên dưới */
    }

    try {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.top = "-1000px";
      document.body.appendChild(helper);
      helper.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(helper);
      return ok;
    } catch (err) {
      return false;
    }
  }

  if (affiliateCopyBtn) {
    let copiedTimer = null;
    affiliateCopyBtn.addEventListener("click", async () => {
      const link = affiliateResultLink.getAttribute("href") || "";
      if (!link) return;

      const ok = await copyTextToClipboard(link);
      const lang = document.documentElement.lang === "en" ? "en" : "vi";
      if (!ok) {
        alert(lang === "en"
          ? "Could not copy automatically. Please select the link and copy it manually."
          : "Không tự sao chép được. Bạn vui lòng bôi đen đường link rồi sao chép thủ công nhé.");
        return;
      }

      affiliateCopied.hidden = false;
      clearTimeout(copiedTimer);
      copiedTimer = setTimeout(() => { affiliateCopied.hidden = true; }, 2500);
    });
  }

  if (affiliateRegisterForm) {
    affiliateRegisterForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = affiliateRegisterForm.querySelector('button[type="submit"]');

      const payload = {
        hoTen: affiliateRegisterForm.affHoTen.value.trim(),
        soDienThoai: affiliateRegisterForm.affSoDienThoai.value.trim(),
        email: affiliateRegisterForm.affEmail.value.trim(),
        nganHang: affiliateRegisterForm.affNganHang.value.trim(),
        soTaiKhoan: affiliateRegisterForm.affSoTaiKhoan.value.trim(),
      };

      if (!payload.hoTen || !payload.soDienThoai || !payload.email || !payload.nganHang || !payload.soTaiKhoan) {
        alert("Vui lòng nhập đủ Họ tên, Số điện thoại, Email, Ngân hàng và Số tài khoản.");
        return;
      }

      submitBtn.disabled = true;
      try {
        const res = await fetch(AFFILIATE_REGISTER_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.status !== "success") {
          throw new Error(data.message || "Không thể gửi đăng ký, vui lòng thử lại sau.");
        }

        const lang = document.documentElement.lang === "en" ? "en" : "vi";

        // Worker trả kèm mã + link nếu Lark đã tính xong cột công thức "Mã
        // Affiliate". Trường hợp hiếm chưa có mã ngay thì vẫn báo thành công
        // và hẹn gửi qua email (cron sẽ gửi bù).
        if (data.affiliateCode && data.affiliateLink) {
          affiliateSuccessText.textContent = lang === "en"
            ? "All set! Your Affiliate account is active. Share the link below — every successful order through it earns you a commission. We've emailed you a copy too."
            : "Đăng ký thành công! Tài khoản Affiliate của bạn đã kích hoạt. Hãy chia sẻ đường link dưới đây — mỗi đơn hàng thành công qua link này bạn đều được nhận hoa hồng. Chúng tôi cũng đã gửi một bản vào email của bạn.";
          affiliateResultCode.textContent = data.affiliateCode;
          affiliateResultLink.textContent = data.affiliateLink;
          affiliateResultLink.setAttribute("href", data.affiliateLink);
          // Dùng link tra cứu riêng do Worker trả về (kèm token). KHÔNG ghép
          // link từ Mã Affiliate: mã nằm công khai trong link giới thiệu nên
          // không dùng làm khoá vào trang số liệu được.
          var lookupLink = document.getElementById("affiliateLookupLink");
          if (lookupLink) lookupLink.setAttribute("href", data.affiliateLookupLink || "/tra-cuu");
          affiliateResult.hidden = false;
        } else {
          affiliateSuccessText.textContent = lang === "en"
            ? "Thank you! Your Affiliate registration has been received. We'll email you your Affiliate code and personal referral link shortly."
            : "Cảm ơn bạn! Đăng ký Affiliate đã được ghi nhận. Chúng tôi sẽ gửi mã Affiliate và link giới thiệu riêng của bạn qua email trong ít phút nữa.";
          affiliateResult.hidden = true;
        }

        if (ZALO_GROUP_URL) {
          affiliateZaloBtn.setAttribute("href", ZALO_GROUP_URL);
          if (ZALO_QR_IMAGE) {
            // Ảnh QR sai tên/không tải được thì tự ẩn, tránh hiện ảnh vỡ —
            // nút "Tham gia nhóm Zalo" bên dưới vẫn dùng được bình thường.
            affiliateZaloQr.onerror = () => { affiliateZaloQr.hidden = true; };
            affiliateZaloQr.setAttribute("src", ZALO_QR_IMAGE);
            affiliateZaloQr.hidden = false;
          }
          affiliateZalo.hidden = false;
        }

        affiliateFormFields.hidden = true;
        affiliateSuccess.hidden = false;
      } catch (err) {
        alert(err.message);
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- CHATBOT TRỢ LÝ ---------- */
  const CHAT_API_ENDPOINT = "https://vidisanar-api.tranchuyen091289.workers.dev/api/chat";
  const chatbotEl = document.getElementById("chatbot");
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatbotPanel = document.getElementById("chatbotPanel");
  const chatbotClose = document.getElementById("chatbotClose");
  const chatbotMessages = document.getElementById("chatbotMessages");
  const chatbotForm = document.getElementById("chatbotForm");
  const chatbotInput = document.getElementById("chatbotInput");

  if (chatbotEl && chatbotToggle && chatbotPanel && chatbotForm && chatbotInput) {
    let chatHistory = [];
    let hasGreeted = false;
    const HOTLINE_FALLBACK_VI = "Xin lỗi, mình chưa hỗ trợ được câu hỏi này. Bạn vui lòng gọi hotline 0915 080 988 để được tư vấn trực tiếp nhé!";
    const HOTLINE_FALLBACK_EN = "Sorry, I can't help with that yet. Please call our hotline 0915 080 988 for direct support!";

    // Khi bàn phím ảo trên điện thoại bật lên, trình duyệt thu nhỏ vùng nhìn
    // thấy thật (visualViewport) chứ không đổi 100vh — nếu không theo dõi việc
    // này, khung chat (fixed, cao cố định theo 100vh) sẽ bị bàn phím che mất
    // phần trên. Đoạn dưới đây cập nhật lại 2 biến CSS để khung chat luôn tự
    // co lại và nằm gọn ngay phía trên bàn phím, giống kiểu Messenger.
    function syncChatbotViewport() {
      const vv = window.visualViewport;
      if (!vv) return;
      const keyboardInset = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      const gap = window.innerWidth <= 480 ? 12 : 26;
      chatbotEl.style.setProperty("--chatbot-bottom", `${gap + keyboardInset}px`);
      chatbotEl.style.setProperty("--chatbot-avail-height", `${Math.max(240, vv.height - 100)}px`);
    }
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", syncChatbotViewport);
      window.visualViewport.addEventListener("scroll", syncChatbotViewport);
    }
    window.addEventListener("resize", syncChatbotViewport);
    syncChatbotViewport();

    function addChatBubble(role, text) {
      const bubble = document.createElement("div");
      bubble.className = `chatbot__msg chatbot__msg--${role === "user" ? "user" : "bot"}`;
      bubble.textContent = text;
      chatbotMessages.appendChild(bubble);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      return bubble;
    }

    function openChat() {
      chatbotEl.classList.add("is-open");
      chatbotPanel.hidden = false;
      if (!hasGreeted) {
        hasGreeted = true;
        addChatBubble(
          "assistant",
          currentLang === "en"
            ? "Hi! I'm the Vị Di Sản assistant. Ask me about our products, pricing, or how to order!"
            : "Xin chào! Mình là trợ lý Vị Di Sản. Bạn cần hỏi gì về sản phẩm, giá cả hay cách đặt hàng không?"
        );
      }
      chatbotInput.focus();
    }

    function closeChat() {
      chatbotEl.classList.remove("is-open");
      chatbotPanel.hidden = true;
    }

    chatbotToggle.addEventListener("click", () => {
      if (chatbotPanel.hidden) openChat();
      else closeChat();
    });
    if (chatbotClose) chatbotClose.addEventListener("click", closeChat);

    // Một số điện thoại báo resize của visualViewport hơi trễ so với lúc
    // bàn phím thật sự bật/tắt — gọi lại sau một nhịp ngắn cho chắc.
    chatbotInput.addEventListener("focus", () => setTimeout(syncChatbotViewport, 300));
    chatbotInput.addEventListener("blur", () => setTimeout(syncChatbotViewport, 300));

    // Bấm ra ngoài khung chat (trên nền trang) cũng tự đóng lại, để khách
    // dễ đọc nội dung khác trên trang mà không cần bấm đúng nút X nhỏ.
    document.addEventListener("click", (e) => {
      if (!chatbotPanel.hidden && !chatbotEl.contains(e.target)) closeChat();
    });
    // Phím Esc cũng đóng — tiện cho khách dùng bàn phím.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !chatbotPanel.hidden) closeChat();
    });

    chatbotForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = chatbotInput.value.trim();
      if (!text) return;

      addChatBubble("user", text);
      chatHistory.push({ role: "user", content: text });
      chatbotInput.value = "";
      chatbotInput.disabled = true;

      const loadingBubble = addChatBubble("assistant", currentLang === "en" ? "Typing..." : "Đang trả lời...");
      loadingBubble.classList.add("chatbot__msg--loading");

      try {
        const res = await fetch(CHAT_API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: chatHistory }),
        });
        const data = await res.json().catch(() => ({}));
        loadingBubble.remove();
        const reply = (data && data.reply) || (currentLang === "en" ? HOTLINE_FALLBACK_EN : HOTLINE_FALLBACK_VI);
        addChatBubble("assistant", reply);
        chatHistory.push({ role: "assistant", content: reply });
      } catch {
        loadingBubble.remove();
        addChatBubble("assistant", currentLang === "en" ? HOTLINE_FALLBACK_EN : HOTLINE_FALLBACK_VI);
      } finally {
        chatbotInput.disabled = false;
        chatbotInput.focus();
      }
    });
  }

});
