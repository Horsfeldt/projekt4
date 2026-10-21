// Simpel interaktivitet: klik på "Vis opskrift"
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Opskriften åbnes!');
  });
});
