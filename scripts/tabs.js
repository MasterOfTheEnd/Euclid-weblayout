document.addEventListener('DOMContentLoaded', function() {
  const tabsBtn = document.querySelectorAll('.tabs-btn');
  const tabsItems = document.querySelectorAll('.tabs-item');

  tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
      let curBtn = item;
      let tabId = curBtn.getAttribute('data-tab');
      let curTab = document.querySelector(tabId)
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active');
      });

      curBtn.classList.add('active');
      curTab.classList.add('active');
    });
  });
});