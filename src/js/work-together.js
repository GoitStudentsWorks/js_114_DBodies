import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const emailField = document.getElementById('emailInput');
  const commentField = document.querySelector('.bottom-input');
  const emailMessage = document.getElementById('emailError');
  const modal = document.getElementById('thankYouModal');
  const closeBtn = document.getElementById('closeModal');

  const toggleModal = show => {
    modal.classList.toggle('show', show);
    document.body.style.overflow = show ? 'hidden' : 'auto';
  };

  const validateEmail = email => {
    return /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  };

  // Функція для відображення статусу email (коректно або помилка)
  const displayEmailStatus = isValid => {
    emailField.style.borderBottom = isValid
      ? '1px solid #3CBC81'
      : '1px solid #E74A3B';

    emailMessage.textContent = isValid
      ? 'Success!'
      : 'Invalid email, try again';

    emailMessage.classList.toggle('success', isValid);
    emailMessage.classList.toggle('error', !isValid);
  };

  emailField.addEventListener('input', () => {
    const isValid = validateEmail(emailField.value.trim());
    displayEmailStatus(isValid);
  });

  commentField.addEventListener('input', () => {
    if (commentField.value.length > 300) {
      commentField.value = commentField.value.slice(0, 300);
    }
  });

  const closeModal = () => toggleModal(false);

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const email = emailField.value.trim();
    const comment = commentField.value.trim();

    if (!validateEmail(email)) {
      displayEmailStatus(false);
      return;
    }

    try {
      await axios.post(
        'https://portfolio-js.b.goit.study/api/requests',
        { email, comment },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toggleModal(true);
      form.reset();
      emailField.style.borderBottom = '1px solid #aaa';
      emailMessage.textContent = '';
      emailMessage.classList.remove('success', 'error');
    } catch (err) {
      alert('Error! Please check the entered data and try again.');
      console.error('Error:', err);
    }
  });
});
