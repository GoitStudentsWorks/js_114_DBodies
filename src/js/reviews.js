import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';

const sliderPrev = document.querySelector('.slider-nav-prev');
const sliderNext = document.querySelector('.slider-nav-next');

let data;

sliderPrev.disabled = true;

sliderNext.addEventListener('click', () => {
  swiper.slideNext();
});

sliderPrev.addEventListener('click', () => {
  swiper.slidePrev();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    swiper.slidePrev();
  }
  if (event.key === 'ArrowRight') {
    swiper.slideNext();
  }
});

fetchData();

const swiper = new Swiper('.swiper-container', {
  //Курсор перетягування
  grabCursor: true,

  speed: 500,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  on: {
    // Подія "slideChange" для контролю блокування кнопок
    slideChange: function () {
      sliderPrev.disabled = false;
      sliderNext.disabled = false;

      if (swiper.isEnd) {
        sliderNext.disabled = true;
      }

      if (swiper.isBeginning) {
        sliderPrev.disabled = true;
      }
    },
  },
});

function renderItems(data) {
  const slider = document.querySelector('.swiper-wrapper');
  const markup = data
    .map(
      ({ author, avatar_url, review }) =>
        `
           <li class="swiper-slide slider-item">
                <img class="slider-item-img" src="${avatar_url}">
                <p class="slider-item-title">${author}</p>
                <p class="slider-item-info">${review}</p>
            </li>             
            `
    )
    .join('');

  slider.insertAdjacentHTML('beforeend', markup);
}

function renderError() {
  const slider = document.querySelector('.swiper-wrapper');
  const markup = `
  
  <div class="slider-error">
    Not found!
  </div>  
  
  `;

  slider.insertAdjacentHTML('beforeend', markup);
}

async function fetchData() {
  try {   
    debugger; 
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    renderItems(response.data);    
  } catch (error) {      
    renderError();
    sliderPrev.disabled = true;
    sliderNext.disabled = true;
    iziToast.error({
      title: 'Error',
      message: 'Something wrong, try again later!',
    });
  }
}


