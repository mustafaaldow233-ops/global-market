// 🌍 ملف الترجمة الكامل للموقع — lang.js

const translations = {
    "ar": {
        "home": "الرئيسية",
        "products": "المنتجات",
        "services": "الخدمات",
        "about": "من نحن",
        "contact": "اتصل بنا",
        "search": "ابحث هنا...",
        "welcome": "مرحباً بك في سوق العالم",
        "categories": "الأقسام",
        "language": "اللغة",
        "buy_now": "اشترِ الآن",
        "latest_products": "أحدث المنتجات",
        "offers": "العروض المميزة",
        "footer_rights": "جميع الحقوق محفوظة © 2025"
    },

    "en": {
        "home": "Home",
        "products": "Products",
        "services": "Services",
        "about": "About Us",
        "contact": "Contact",
        "search": "Search...",
        "welcome": "Welcome to Global Market",
        "categories": "Categories",
        "language": "Language",
        "buy_now": "Buy Now",
        "latest_products": "Latest Products",
        "offers": "Special Offers",
        "footer_rights": "All Rights Reserved © 2025"
    },

    "es": {
        "home": "Inicio",
        "products": "Productos",
        "services": "Servicios",
        "about": "Sobre Nosotros",
        "contact": "Contacto",
        "search": "Buscar...",
        "welcome": "Bienvenido a Global Market",
        "categories": "Categorías",
        "language": "Idioma",
        "buy_now": "Comprar Ahora",
        "latest_products": "Productos Recientes",
        "offers": "Ofertas Especiales",
        "footer_rights": "Todos los derechos reservados © 2025"
    },

    "fr": {
        "home": "Accueil",
        "products": "Produits",
        "services": "Services",
        "about": "À propos",
        "contact": "Contact",
        "search": "Rechercher...",
        "welcome": "Bienvenue à Global Market",
        "categories": "Catégories",
        "language": "Langue",
        "buy_now": "Acheter Maintenant",
        "latest_products": "Derniers Produits",
        "offers": "Offres Spéciales",
        "footer_rights": "Tous droits réservés © 2025"
    }
};

// ⭐ وظيفة تغيير اللغة على الموقع
function setLanguage(lang) {
    localStorage.setItem("site_lang", lang);
    applyTranslations();
}

// ⭐ تطبيق الترجمة على كل العناصر
function applyTranslations() {
    const lang = localStorage.getItem("site_lang") || "ar";
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach((el) => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// ⭐ تشغيل الترجمة تلقائياً عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", applyTranslations);
