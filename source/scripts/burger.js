const header = document.querySelector('.header');
const burgerButton = document.querySelector('.header__button');
const overlay = document.querySelector('.page__overlay');

burgerButton.addEventListener('click', () => {
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');

  if (header.classList.contains('header--opened')) {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
});
