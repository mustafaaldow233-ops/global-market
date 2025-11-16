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
