// Navigation toggle and form handling for the responsive landing page.
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const contactForm = document.querySelector('[data-contact-form]');
const formMessage = document.querySelector('[data-form-message]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    navToggle.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('is-open') ? 'true' : 'false'
    );
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please complete all fields before submitting.';
      formMessage.style.color = '#fca5a5';
      return;
    }

    formMessage.textContent = 'Thank you, your message has been sent successfully!';
    formMessage.style.color = '#44d7a8';
    contactForm.reset();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-loaded');
});
