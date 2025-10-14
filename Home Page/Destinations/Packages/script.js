// --- WhatsApp chat (Book Now) ---
document.getElementById('bookNow')?.addEventListener('click', () => {
  const message = encodeURIComponent("Hello! I'm interested for your packages. Could you please provide more details?");
  window.open(`https://wa.me/+94702725683?text=${message}`, '_blank');
});

// --- Enquire Now button navigation ---
document.getElementById("enquireBtn")?.addEventListener("click", function() {
  window.location.href = "../#"; // target page
});

// --- Hotel slider infinite autoplay & responsive ---
const slider = document.getElementById('hotelSlider');

if (slider) {
  const slides = Array.from(slider.children);
  
  // Clone slides for infinite effect
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  let scrollAmount = 0;

  // Speed based on screen width
  function getSpeed() {
    const width = window.innerWidth;
    if (width <= 600) return 0.5; // mobile slower
    if (width <= 992) return 0.8; // tablet
    return 1; // desktop
  }

  let speed = getSpeed();

  window.addEventListener('resize', () => {
    speed = getSpeed();
  });

  let animation;

  function animateSlider() {
    scrollAmount += speed;
    if (scrollAmount >= slider.scrollWidth / 2) {
      scrollAmount = 0;
    }
    slider.scrollLeft = scrollAmount;
    animation = requestAnimationFrame(animateSlider);
  }

  animateSlider();

  // Pause on hover/touch
  slider.addEventListener('mouseenter', () => cancelAnimationFrame(animation));
  slider.addEventListener('mouseleave', () => animateSlider());
  slider.addEventListener('touchstart', () => cancelAnimationFrame(animation));
  slider.addEventListener('touchend', () => animateSlider());


}

// --- Lightbox for gallery ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const gallery = document.getElementById('gallery');

gallery?.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  const full = img.dataset.full || img.src;
  lightboxImg.src = full;
  lightbox.classList.add('show');
});

document.getElementById('lightboxClose')?.addEventListener('click', () => {
  lightbox.classList.remove('show');
  lightboxImg.src = '';
});

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
  }
});

// Accessibility: allow closing lightbox with Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox && lightbox.classList.contains('show')) {
      lightbox.classList.remove('show');
      lightboxImg.src = '';
    }
  }
});

// --- Navigation bar hide/show on scroll ---
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  if (header) {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const isSecondPage = document.querySelector('.hero') !== null;
    const mainSection = isSecondPage ? document.querySelector('.hero') : document.querySelector('.home');
    
    function updateHeader(scrollY) {
      if (scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");

      if (mainSection) {
        const mainSectionHeight = mainSection.offsetHeight;
        if (scrollY > mainSectionHeight / 2) {
          if (scrollY > lastScrollY) header.classList.add('nav-hide');
          else header.classList.remove('nav-hide');
        } else {
          header.classList.remove('nav-hide');
        }
      }
      
      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeader(currentScrollY);
        });
        ticking = true;
      }
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.navigation');
    const body = document.body;
    
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('nav-open');
      });
    }
  }
});


// Footer Accordion Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
  
  // Only run on mobile screens
  function initFooterAccordion() {
    if (window.innerWidth <= 768) {
      const footerLists = document.querySelectorAll('.footer-nav ul');
      
      footerLists.forEach(ul => {
        const firstItem = ul.querySelector('li:first-child');
        
        if (firstItem) {
          // Remove any existing click listeners
          firstItem.replaceWith(firstItem.cloneNode(true));
          const newFirstItem = ul.querySelector('li:first-child');
          
          // Add click event
          newFirstItem.addEventListener('click', function(e) {
            e.preventDefault();
            ul.classList.toggle('active');
          });
        }
      });
    }
  }
  
  // Initialize on load
  initFooterAccordion();
  
  // Re-initialize on window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      initFooterAccordion();
    }, 250);
  });
});