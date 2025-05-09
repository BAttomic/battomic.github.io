const themeBtn = document.querySelector('.nav-theme-btn');
themeBtn.addEventListener('click', () => {
  let body = document.body;
  if (!body.classList.contains('dark')) {
    body.classList.add('dark');
    themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
    localStorage.setItem('theme', 'light');
  }
});
window.addEventListener('load', () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
  }
});