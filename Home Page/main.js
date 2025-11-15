// Responsive navigation menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');
const body = document.body;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("nav-open");
});


// Smooth scrolling for navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



// nav bar scrolling aimation
const header = document.querySelector('header');
const homeSection = document.querySelector('.home');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const homeHeight = homeSection.offsetHeight;

  // Only start hiding if user has scrolled past half of the home section
  if (currentScrollY > homeHeight / 2) {
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      header.classList.add('nav-hide');
    } else {
      // Scrolling up
      header.classList.remove('nav-hide');
    }
  } else {
    // Reset to visible if near top
    header.classList.remove('nav-hide');
  }

  lastScrollY = currentScrollY;
});



// Video slider navigation
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide'); 
const content = document.querySelectorAll('.content');

var sliderNav = function (manual){
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  content.forEach((content) => {
    content.classList.remove('active');
  });

  btns[manual].classList.add('active');
  slides[manual].classList.add('active');
  content[manual].classList.add('active');
}

btns.forEach((btn, i) =>  {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Navigation toggle (future support)
console.log("Phanthom Global Destinations Loaded");



//Destination card slider

document.querySelectorAll('.destination_card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    if (url) window.location.href = url;
  });
});

//footer
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
  this.reset();
});


document.querySelectorAll('.services .card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside card
    const y = e.clientY - rect.top;  // mouse Y inside card

    const rotateX = ((y / rect.height) - 0.5) * 10; // tilt up/down
    const rotateY = ((x / rect.width) - 0.5) * 10;  // tilt left/right

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    card.classList.remove('hovered');
  });
});


// Footer navigation toggle
document.querySelectorAll(".footer-nav ul").forEach(ul => {
  ul.querySelector("li:first-child").addEventListener("click", () => {
    ul.classList.toggle("active");
  });
});


