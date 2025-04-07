import '/js/header.js';

// MOBILE-MENU //

document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('[data-menu-close]');
  const body = document.body;

  // Відкриття мобільного меню
  burgerIcon.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
    body.classList.add('no-scroll');
  });

  // Закриття мобільного меню
  closeButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });

  // Закриття меню при кліку на посилання
  const menuLinks = document.querySelectorAll('.mobile-menu-link');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });
  });

  // Закриття меню при натисканні клавіші ESC
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // Якщо натиснуто Esc
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
    }
  });
});

// MENU //

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');

// Відкриття/закриття меню по кліку на кнопку
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  navList.classList.toggle('is-open');
});

const navLinks = navList.querySelectorAll('a');

navLinks.forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navList.classList.remove('is-open');
  });
});

// Закриття меню при кліку поза меню
document.addEventListener('click', event => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnBtn = menuBtn.contains(event.target);

  if (!isClickInsideNav && !isClickOnBtn) {
    nav.classList.remove('is-open');
    navList.classList.remove('is-open');
  }
});

// Закриття меню при натисканні Escape
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    nav.classList.remove('is-open');
    navList.classList.remove('is-open');
  }
});
