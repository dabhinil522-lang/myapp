const themeToggle = document.querySelector('#themeToggle');
const toast = document.querySelector('#toast');
const contactButtons = document.querySelectorAll('[data-copy]');
const navLinks = document.querySelectorAll('.nav-links a');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Mode';
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '○' : '◐';
});

contactButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast(`${value} copied`);
    } catch (error) {
      showToast(value);
    }
  });
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
