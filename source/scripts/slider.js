const slider = document.querySelector('.main__list');
const slides = slider.querySelectorAll('.main__item');
const prevButton = document.querySelector('.main__button--prev');
const nextButton = document.querySelector('.main__button--next');

const MOBILE_WIDTH = 320;

let position = 0;
let stepIndex = 0;

const nextSlide = () => {
  if (position < ((slides.length - 1) * MOBILE_WIDTH)) {
    position += MOBILE_WIDTH;
    stepIndex++;
  } else {
    return false;
  }

  slider.style.transform = `translateX(${-position}px)`;

  if (stepIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }
};

const prevSlide = () => {
  if (position > 0) {
    position -= MOBILE_WIDTH;
    stepIndex--;
  } else {
    return false;
  }

  slider.style.transform = `translateX(${-position}px)`;

  if (stepIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
