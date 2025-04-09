document.addEventListener('DOMContentLoaded', () => {
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

  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Перевіряємо чи поле валідне згідно з pattern
    if (!emailInput.validity.valid) {
      emailError.textContent = 'Будь ласка, введіть коректний email.';
      return;
    } else {
      emailError.textContent = '';
    }

    // Дані з форми
    const formData = {
      email: emailInput.value,
    };

    try {
      const response = await fetch('https://your-backend-url.com/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Дякуємо! Дані надіслано.');
        form.reset();
      } else {
        throw new Error('Помилка сервера');
      }
    } catch (error) {
      alert('Сталася помилка при надсиланні. Спробуйте пізніше.');
      console.error(error);
    }
  });
});
