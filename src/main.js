import 'modern-normalize/modern-normalize.css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

const form = document.getElementById('contactForm');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
  form.reset();
});

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
