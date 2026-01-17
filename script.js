

/*Test 1 Hamburger Menu Javascript Code*/
// const navLinks = document.querySelector('.nav-links');
// const navLinkItems = document.querySelectorAll('.nav-link');
// const menuBtn = document.querySelector('.header-btn');
// const closeBtn = document.querySelector('.close-header-btn');

// function toggleMenu() {
//   navLinks.classList.toggle('showMenu');
//   menuBtn.style.display = navLinks.classList.contains('showMenu') ? 'none' : 'block';
//   closeBtn.style.display = navLinks.classList.contains('showMenu') ? 'block' : 'none';
// }

// menuBtn.addEventListener('click', toggleMenu);
// closeBtn.addEventListener('click', toggleMenu);

// navLinkItems.forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('showMenu');
//     menuBtn.style.display = 'block';
//     closeBtn.style.display = 'none';
//   });
// });


const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger-container");
const closeIcon= document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-open");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


