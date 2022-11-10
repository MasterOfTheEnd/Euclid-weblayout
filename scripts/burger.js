document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerContent = document.querySelector('.burger-content');

  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    burgerContent.classList.toggle('active');
  });
});