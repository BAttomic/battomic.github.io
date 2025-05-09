
function setLanguage(lang) {
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.getAttribute(lang === "pt" ? "data-pt" : "data-en");
  });
}
window.onload = () => setLanguage("pt");
