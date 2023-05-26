const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
  });
});

const closeButton = document.querySelector('.modal-header .close');

closeButton.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});
