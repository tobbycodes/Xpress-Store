const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const menuBtn = document.querySelector('.header-btn');
const closeBtn = document.querySelector('.close-header-btn');

function toggleMenu() {
  navLinks.classList.toggle('showMenu');
  menuBtn.style.display = navLinks.classList.contains('showMenu') ? 'none' : 'block';
  closeBtn.style.display = navLinks.classList.contains('showMenu') ? 'block' : 'none';
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('showMenu');
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  });
});
