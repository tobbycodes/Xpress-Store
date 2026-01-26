//Menu Hamburger
const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger-container");
const closeIcon= document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-open");

// const testImgContainer = document.querySelector('.test-img-container');
// const testImg = document.querySelector('.test-img');

const whatsapp = document.getElementById("whatsapp-icon");
const hero = document.querySelector("#hero");
const footer = document.querySelector("#footer");

//Restrict Users From Submitting If Values Are Not Entered
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const requiredFormElements = document.querySelectorAll('input:not([type="submit"])','textarea');

form.addEventListener('input',()=>{
  const allFilled = Array.from(requiredFormElements).every(formElement =>{
    return formElement.value.trim() !== ''
  })
  submitBtn.disabled = !allFilled;
  
})

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



// function handleCarouselMove(positive=true){
//   const slideWidth = testImg.clientWidth;
//   testImgContainer.scrollLeft = positive
//   ?testImgContainer.scrollLeft + slideWidth
//   :testImgContainer.scrollLeft - slideWidth;
// }

//Testimonial Carousel Imae Slider

const track = document.querySelector('.carousel-img-container');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;

/* CREATE DOTS */
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

const dots = Array.from(dotsContainer.children);

/* UPDATE SLIDER */
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

/* ARROWS */
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});


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

// ✅ Call it
initWhatsappScroll();




