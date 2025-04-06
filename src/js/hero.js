document.querySelectorAll('.hero-list-item').forEach(item => {
  item.addEventListener('click', e => {
    const link = item.querySelector('a');
    if (link) {
      link.click();
    }
  });
});

// const emailLink = document.querySelector('.email-link');

// function handleEmailOverflow() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth <= 375) {
//     // Якщо екран менший або рівний 375px, обрізаємо текст
//     const fullText = emailLink.textContent;
//     const maxLength = 12; // Максимальна кількість символів, до якої обрізаємо
//     if (fullText.length > maxLength) {
//       emailLink.textContent = fullText.substring(0, maxLength) + '...';
//     }
//   } else {
//     // Якщо екран більший за 375px, показуємо весь текст
//     emailLink.textContent = 'lloydjefferson@gmail.com';
//   }
// }

// // Викликаємо функцію для початкової установки
// handleEmailOverflow();

// // Оновлюємо, якщо змінюється розмір вікна
// window.addEventListener('resize', handleEmailOverflow);
