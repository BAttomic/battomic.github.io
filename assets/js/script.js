// Efeito leve de interação em cards de projeto (pode crescer)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.cursor = 'pointer';
  });
});
