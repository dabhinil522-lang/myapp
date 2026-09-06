const themeToggle = document.querySelector('#themeToggle');
const toast = document.querySelector('#toast');
const contactButtons = document.querySelectorAll('[data-copy]');
const navLinks = document.querySelectorAll('.nav-links a');
const aiScan = document.querySelector('#aiScan');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const lightboxCaption = document.querySelector('#lightboxCaption');
const lightboxClose = document.querySelector('#lightboxClose');

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

aiScan.addEventListener('click', () => {
  aiScan.classList.add('scanning');
  aiScan.querySelector('span').textContent = '~';
  aiScan.lastChild.textContent = ' Scanning profile';
  window.setTimeout(() => {
    aiScan.classList.remove('scanning');
    aiScan.querySelector('span').textContent = '+';
    aiScan.lastChild.textContent = ' Identity verified';
    showToast('Neil / student creator / tech explorer');
  }, 950);
});

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector('img');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = item.querySelector('figcaption').textContent;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
