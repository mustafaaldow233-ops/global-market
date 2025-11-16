const translations = {
  ar: {
    title: "السوق العالمي",
    footer_text: "جميع الحقوق محفوظة © السوق العالمي",

    cat_cars: "السيارات",
    cat_phones: "الهواتف",
    cat_real: "العقارات",
    cat_elec: "الإلكترونيات",
    cat_jobs: "الوظائف",
    cat_animals: "الحيوانات",
    cat_fashion: "الأزياء",
    cat_services: "الخدمات"
  },

  en: {
    title: "Global Market",
    footer_text: "All rights reserved © Global Market",

    cat_cars: "Cars",
    cat_phones: "Phones",
    cat_real: "Real Estate",
    cat_elec: "Electronics",
    cat_jobs: "Jobs",
    cat_animals: "Animals",
    cat_fashion: "Fashion",
    cat_services: "Services"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  for (let key in translations[lang]) {
    let elem = document.getElementById(key);
    if (elem) elem.textContent = translations[lang][key];
  }
}
// ---------------------
// 🔵 صفحة الإعلانات
// ---------------------
ar.ads = {
    title: "الإعلانات",
    add_ad: "إضافة إعلان جديد",
    category: "القسم",
    name: "الاسم",
    phone: "رقم الهاتف",
    description: "الوصف",
    upload_images: "رفع الصور",
    submit: "نشر الإعلان",
    recent_ads: "أحدث الإعلانات",
};

en.ads = {
    title: "Ads",
    add_ad: "Add New Ad",
    category: "Category",
    name: "Name",
    phone: "Phone Number",
    description: "Description",
    upload_images: "Upload Images",
    submit: "Post Ad",
    recent_ads: "Recent Ads",
};

fr.ads = {
    title: "Annonces",
    add_ad: "Ajouter une annonce",
    category: "Catégorie",
    name: "Nom",
    phone: "Numéro de téléphone",
    description: "Description",
    upload_images: "Télécharger des images",
    submit: "Publier",
    recent_ads: "Annonces récentes",
};
