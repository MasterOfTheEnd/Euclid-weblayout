document.addEventListener('DOMContentLoaded', function() {
  const search = document.querySelector('.search');
  const searchClose = document.querySelector('.search-close');
  const searchContainer = document.querySelector('.search-container');


  search.addEventListener('click', function() {
    searchContainer.classList.add('active');
    this.type = 'submit';
  });

  searchClose.addEventListener('click', function() {
    searchContainer.classList.remove('active');
    search.type = 'button';
  });
});