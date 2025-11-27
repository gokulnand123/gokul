// Toggle mobile navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Basic contact form handling (client-side only)
const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      status.textContent = 'Please fill out all fields.';
      return;
    }
    status.textContent = 'Thanks! Your message has been captured locally.';
    form.reset();
  });
}
