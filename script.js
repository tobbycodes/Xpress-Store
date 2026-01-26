//Menu Hamburger
const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger-container");
const closeIcon= document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-open");

//Testimonial Image Elements
const testImgContainer = document.querySelector('.test-img-container');
const testImg = document.querySelector('.test-img');
const allTestImages = document.querySelectorAll('.test-img');
const dots = document.querySelectorAll('.testimonial-dot');
const totalImages = allTestImages.length;

// const track = document.querySelector('.test-img-container');
// const slides = Array.from(track.children);
// const prevBtn = document.querySelector('.prev-arrow');
// const nextBtn = document.querySelector('.next-arrow');
// const dotsContainer = document.querySelector('.carousel-dots');

const whatsapp = document.getElementById("whatsapp-icon");
const hero = document.querySelector("#hero");
const footer = document.querySelector("#footer");

//Restrict Users From Submitting If Values Are Not Entered
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const requiredFormElements = document.querySelectorAll('input:not([type="submit"])','textarea');

//Gallery Image Elements
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
// form.addEventListener('input',()=>{
//   const allFilled = Array.from(requiredFormElements).every(formElement =>{
//     return formElement.value.trim() !== ''
//   })
//   submitBtn.disabled = !allFilled;
  
// })

//Responsive Menu Toggle Function
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


/* Whatsapp Javascript Code */
function initWhatsappScroll() {
  if (!whatsapp || !hero || !footer) return;

  const offset = 32;

  const onScroll = () => {
    const scrollY = window.scrollY;
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const footerTop = footer.offsetTop;

    // Start following after hero
    if (scrollY + window.innerHeight >= heroBottom) {
      whatsapp.classList.add("is-fixed");
    } else {
      whatsapp.classList.remove("is-fixed");
    }

    // Stop at footer
    if (scrollY + window.innerHeight >= footerTop - offset) {
      whatsapp.classList.remove("is-fixed");
      whatsapp.classList.add("is-stopped");

      whatsapp.style.top =
        footerTop - whatsapp.offsetHeight - offset + "px";
    } else {
      whatsapp.classList.remove("is-stopped");
      whatsapp.style.top = "";
    }
  };

  window.addEventListener("scroll", onScroll);
}

// Call it
initWhatsappScroll();



//Testimonial Image Elements

// Function to get how many images are visible based on screen size
function getVisibleImagesCount() {
  const containerWidth = testImgContainer.clientWidth;
  const imageWidth = testImg.clientWidth;
  return Math.round(containerWidth / imageWidth);
}

// Test-Img-Container- Function to update dots based on scroll position
function updateDots() {
  const scrollLeft = testImgContainer.scrollLeft;
  const imageWidth = testImg.clientWidth;
  const visibleCount = getVisibleImagesCount();
  
  // Calculate which image index is at the start of the visible area
  const currentIndex = Math.round(scrollLeft / imageWidth);
  
  // Update dot states
  dots.forEach((dot, index) => {
    // Check if this image is currently visible
    const isVisible = index >= currentIndex && index < currentIndex + visibleCount;
    dot.classList.toggle('active', isVisible);
  });
}

// Handle carousel move
function handleCarouselMove(positive = true) {
  const slideWidth = testImg.clientWidth;
  testImgContainer.scrollLeft = positive
    ? testImgContainer.scrollLeft + slideWidth
    : testImgContainer.scrollLeft - slideWidth;
}

// Go to specific slide when dot is clicked
function goToSlide(index) {
  const imageWidth = testImg.clientWidth;
  testImgContainer.scrollLeft = imageWidth * index;
}

// Listen to scroll events to update dots
testImgContainer.addEventListener('scroll', updateDots);

// Listen to window resize to update dots
window.addEventListener('resize', updateDots);

// Initialize dots on page load
updateDots();



//Testimonial Carousel Image Slider 2nd Attempt

// let currentIndex = 0;

// /* CREATE DOTS */
// slides.forEach((_, index) => {
//   const dot = document.createElement('button');
//   if (index === 0) dot.classList.add('active');
//   dotsContainer.appendChild(dot);

//   dot.addEventListener('click', () => {
//     currentIndex = index;
//     updateCarousel();
//   });
// });

// const dots = Array.from(dotsContainer.children);

// /* UPDATE SLIDER */
// function updateCarousel() {
//   track.style.transform = `translateX(-${currentIndex * 100}%)`;

//   dots.forEach(dot => dot.classList.remove('active'));
//   dots[currentIndex].classList.add('active');
// }

// /* ARROWS */
// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   updateCarousel();
// });

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   updateCarousel();
// });



//Gallery Image Animation


next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})