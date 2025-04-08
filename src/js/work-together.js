import 'modern-normalize/modern-normalize.css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

const modal = document.getElementById('thankYouModal');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('contactForm');

function openModal() {
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  openModal();
  form.reset();
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
