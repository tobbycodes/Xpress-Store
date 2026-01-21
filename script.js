//Menu Hamburger
const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger-container");
const closeIcon= document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-open");

const testImgContainer = document.querySelector('.test-img-container');
const testImg = document.querySelector('.test-img');

const whatsapp = document.getElementById("whatsapp-icon");
const hero = document.querySelector("#hero");
const footer = document.querySelector("#footer");

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

// document.querySelector('.prev-arrow').addEventListener('click',handleCarouselMove(false))

function handleCarouselMove(positive=true){
  const slideWidth = testImg.clientWidth;
  testImgContainer.scrollLeft = positive
  ?testImgContainer.scrollLeft + slideWidth
  :testImgContainer.scrollLeft - slideWidth;
}


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


//Restrict Users From Submitting If Values Are Not Entered
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");

form.addEventListener("input", function() {
  const allFilled = Array.from(form.elements).every(input => {
    return input.type === "submit" || input.value.trim() !== "";
  });
  submitButton.disabled = !allFilled;
});