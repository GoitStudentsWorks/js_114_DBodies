import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const ac = new Accordion('.aboutme-ac-list', {
  elementClass: 'aboutme-ac-item',
  triggerClass: 'aboutme-ac-trigger',
  panelClass: 'aboutme-ac-panel',
  activeClass: 'is-active',
  duration: 400,
  showMultiple: false,
  collapse: true,
  openOnInit: [0],
});

let previousIndex = 0;

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  spaceBetween: 0,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  initialSlide: 0,
  slideActiveClass: 'my-active-slide',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  touchEventsTarget: 'swiper',

  on: {
    slideChangeTransitionStart() {
      const slides = swiper.slides.length;
      const realIndex = swiper.realIndex;

      document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.classList.remove('rotate-left', 'rotate-right');
      });

      let direction = 'right';
      if (
        (realIndex > previousIndex && realIndex - previousIndex < slides / 2) ||
        (realIndex < previousIndex && previousIndex - realIndex > slides / 2)
      ) {
        direction = 'right';
      } else {
        direction = 'left';
      }

      previousIndex = realIndex;

      const activeSlide = document.querySelector('.my-active-slide');
      if (activeSlide) {
        activeSlide.classList.add(
          direction === 'right' ? 'rotate-right' : 'rotate-left'
        );
      }
    },
  },
});

document.addEventListener('keydown', event => {
  swiper.slides.forEach(slide => {
    slide.setAttribute('tabindex', '0');
  });

  if (event.key === 'ArrowRight') {
    swiper.slideNext();
  } else if (event.key === 'ArrowLeft') {
    swiper.slidePrev();
  }
});
