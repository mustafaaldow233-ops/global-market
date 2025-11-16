// assets/js/lang.js
// ترجمة النصوص لموقع "Global Market" — object للترجمات
const TRANSLATIONS = {
  "ar": {
    "site_title": "السوق العالمي",
    "hero_title": "مرحباً بكم في السوق العالمي",
    "hero_sub": "أفضل المنتجات والعروض في مكان واحد",
    "nav_home": "الرئيسية",
    "nav_products": "المنتجات",
    "nav_categories": "الأقسام",
    "nav_about": "عن الموقع",
    "nav_contact": "تواصل",
    "services_title": "خدماتنا",
    "service_1": "نشر إعلانات مجانية",
    "service_2": "متجر خاص لك",
    "service_3": "عروض يومية",
    "contact_title": "تواصل معنا",
    "contact_whatsapp": "واتساب: 0000000000",
    "footer_copy": "© 2025 السوق العالمي — جميع الحقوق محفوظة",
    "buy_via_whatsapp": "شراء عبر واتساب",
    "price_label": "السعر:",
    "ads_hint": "مكان إعلان (ضع كود AdSense هنا بعد الموافقة)"
  },
  "en": {
    "site_title": "Global Market",
    "hero_title": "Welcome to Global Market",
    "hero_sub": "Best products and deals in one place",
    "nav_home": "Home",
    "nav_products": "Products",
    "nav_categories": "Categories",
    "nav_about": "About",
    "nav_contact": "Contact",
    "services_title": "Our services",
    "service_1": "Free ads posting",
    "service_2": "Your own store",
    "service_3": "Daily deals",
    "contact_title": "Contact us",
    "contact_whatsapp": "WhatsApp: 0000000000",
    "footer_copy": "© 2025 Global Market — All rights reserved",
    "buy_via_whatsapp": "Buy via WhatsApp",
    "price_label": "Price:",
    "ads_hint": "Ad slot (place AdSense code here after approval)"
  },
  "fr": {
    "site_title": "Marché Global",
    "hero_title": "Bienvenue au Marché Global",
    "hero_sub": "Meilleurs produits et offres en un seul endroit",
    "nav_home": "Accueil",
    "nav_products": "Produits",
    "nav_categories": "Catégories",
    "nav_about": "À propos",
    "nav_contact": "Contact",
    "services_title": "Nos services",
    "service_1": "Publier des annonces gratuites",
    "service_2": "Votre boutique",
    "service_3": "Offres quotidiennes",
    "contact_title": "Contactez-nous",
    "contact_whatsapp": "WhatsApp: 0000000000",
    "footer_copy": "© 2025 Marché Global — Tous droits réservés",
    "buy_via_whatsapp": "Acheter via WhatsApp",
    "price_label": "Prix:",
    "ads_hint": "Emplacement publicitaire (collez le code AdSense après approbation)"
  }
  // يمكنك إضافة لغات أخرى بنفس النمط: "es": { ... }, "de": { ... }, etc.
};

// مفاتيح مساعدة
const LANG_KEY = 'gm_lang';

// استرجاع اللغة المحفوظة أو الافتراضية (ar)
function getSavedLang() {
  return localStorage.getItem(LANG_KEY) || 'ar';
}

// حفظ اللغة
function saveLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

// تطبيق الترجمات على كل العناصر التي فيها data-i18n
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['ar'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const text = dict[key];
    if (text === undefined) return;
    // إذا العنصر input أو placeholder
    if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
      el.setAttribute('placeholder', text);
    } else {
      el.innerText = text;
    }
  });
  // عنوان الصفحة
  if (dict['site_title']) document.title = dict['site_title'];
}

// تغيير اللغة (تمنع فلاش النص)
function changeLanguage(lang) {
  saveLang(lang);
  applyTranslations(lang);
  // عدل اتجاه الصفحة إذا لزم (مثلاً rtl للغة العربية)
  if (lang === 'ar' || lang === 'he') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
}

// تهيئة عند تحميل الصفحة
function initLangSwitcher() {
  // ملء select اللغات إذا كان موجود
  const sel = document.getElementById('langSelect');
  if (sel) {
    // تفريغ ثم إضافة خيارات من TRANSLATIONS
    sel.innerHTML = '';
    Object.keys(TRANSLATIONS).forEach(code => {
      const opt = document.createElement('option');
      opt.value = code;
      // عرض الاسم القصير: يمكن تغييره لاحقاً لجعل الاسم بلغة الأصل
      opt.innerText = (code === 'ar' ? 'العربية' : code === 'en' ? 'English' : code === 'fr' ? 'Français' : code);
      sel.appendChild(opt);
    });
    // ضبط القيمة المحفوظة
    const cur = getSavedLang();
    sel.value = cur;
    sel.addEventListener('change', e => changeLanguage(e.target.value));
  }

  // تطبيق اللغة الحالية
  changeLanguage(getSavedLang());
}

// تأكيد التهيئة بعد تحميل DOM
document.addEventListener('DOMContentLoaded', initLangSwitcher);
// Login
"login_title": "تسجيل الدخول",
"login_header": "ادخل إلى حسابك",
"email_label": "البريد الإلكتروني",
"password_label": "كلمة المرور",
"login_btn": "تسجيل الدخول",
"no_account": "ليس لديك حساب؟",
"register_now": "إنشاء حساب",

// Register
"register_title": "إنشاء حساب",
"register_header": "معلومات الحساب",
"name_label": "الاسم الكامل",
"choose_type": "نوع الحساب",
"normal_user": "مستخدم عادي",
"merchant": "تاجر",
"register_btn": "إنشاء حساب",
"have_account": "لديك حساب مسبقاً؟",
"login_now": "تسجيل الدخول",

// Add Product
"add_product_title": "رفع منتج",
"add_product_header": "تفاصيل المنتج",
"product_name": "اسم المنتج",
"product_price": "سعر المنتج",
"product_desc": "وصف المنتج",
"product_image": "صورة المنتج",
"upload_btn": "رفع المنتج",

// Chat
"chat_title": "المحادثة",
"chat_welcome": "مرحبا! اكتب رسالتك للتاجر.",
"send_btn": "إرسال"
