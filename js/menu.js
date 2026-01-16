// simple menu toggle: changes text between "Menu" and "Close" and opens full-page nav
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  // initialize aria
  menuToggle.setAttribute('aria-expanded', 'false');

  menuToggle.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('open');
    menuToggle.textContent = opened ? 'Close' : 'Menu';
    menuToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    document.body.classList.toggle('menu-open', opened);
  });

  // close when a link is clicked (good for single-page anchors)
  navLinks.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      menuToggle.textContent = 'Menu';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });

  // close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuToggle.textContent = 'Menu';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });
}