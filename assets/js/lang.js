function setLanguage(lang) {
  document.querySelectorAll('[data-pt], [data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
  document.getElementById('btn-pt').style.display = lang === 'en' ? 'inline-block' : 'none';
  document.getElementById('btn-en').style.display = lang === 'pt' ? 'inline-block' : 'none';
}
window.onload = () => setLanguage('pt');