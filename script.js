let navLinks = document.querySelector('.nav-links')

let headerBtn = document.querySelector('.header-btn')

headerBtn.addEventListener('click',function(){
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
})