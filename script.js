const navLinks = document.querySelector('.nav-links')
const headerBtn = document.querySelector('.header-btn')

headerBtn.addEventListener('click',() => {
    navLinks.classList.toggle('active')
})