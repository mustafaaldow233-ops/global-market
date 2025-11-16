document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("lang") === "en") {
        setLang("en");
    } else {
        setLang("ar");
    }
});
