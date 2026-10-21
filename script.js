// Like-knap interaktivitet
document.querySelectorAll('.like').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = '❤️';
    btn.disabled = true;
  });
});
