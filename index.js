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
