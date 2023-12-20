const buttons = document.querySelectorAll('.photo__text');
const images = document.querySelectorAll('.photo__block img');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.classList.add('photo__text-active');
    button.querySelector('.photo__text-h').classList.add('photo__text-active-h');
    button.querySelector('.line').classList.add('photo__text-active-line');
    button.querySelector('.photo__text-p').classList.add('photo__text-active-p');
    
    images.forEach((image) => {
      image.style.display = 'none';
    });
    images[index].style.display = 'block';
  });
});


const sliderArrow = document.querySelector(".reviews__block-flex"),
  slidesArrow = document.querySelectorAll(".block__review"),
  left = document.querySelector(".left"),
  right = document.querySelector(".right");

let slideIndex = 0;

left.addEventListener("click", () => {
  showSlideArrow(-1);
});
right.addEventListener("click", () => {
  showSlideArrow(1);
});

function showSlideArrow(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slidesArrow.length - 1;
  }
  if (slideIndex >= slidesArrow.length) {
    slideIndex = 0;
  }

  slidesArrow.forEach((item) => (item.style.display = "none"));
  slidesArrow[slideIndex].style.display = "block";
}

showSlideArrow(0);


const btn = document.querySelector('.review__btn');
const modal = document.querySelector('.element-modal-window');
const closeBtn = modal.querySelector('.klose');
btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


const button = document.querySelector('.btn-questions');
const modaln = document.querySelector('.element-modal-window-two');
const closeButton = modaln.querySelector('.klose');
button.addEventListener('click', () => {
  modaln.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modaln.style.display = 'none';
});
const menu = document.querySelector('.menu-btn');
const mobilMenu = document.querySelector('.header__menu');
menu.addEventListener('click', () => {
  mobilMenu.style.display = 'block';
});
