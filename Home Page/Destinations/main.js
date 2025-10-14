// ===== ScrollReveal base option =====
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 500,
};

// ===== Choose Section =====
ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__subheader", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".choose__list li", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

// ===== Explore Section =====
ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".explore__content .section__subheader", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".explore__grid div", {
  duration: 1000,
  delay:700,
  interval: 500,
});

// ===== Client Cards (Prev / Next Buttons) =====
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client__card"));

if (next) {
  next.addEventListener("click", () => {
    for (let index = 0; index < clientCards.length; index++) {
      if (clientCards[index].classList.contains("active")) {
        const nextIndex = (index + 1) % clientCards.length;
        clientCards[index].classList.remove("active");
        clientCards[nextIndex].classList.add("active");
        break;
      }
    }
  });
}

if (prev) {
  prev.addEventListener("click", () => {
    for (let index = 0; index < clientCards.length; index++) {
      if (clientCards[index].classList.contains("active")) {
        const prevIndex = (index ? index : clientCards.length) - 1;
        clientCards[index].classList.remove("active");
        clientCards[prevIndex].classList.add("active");
        break;
      }
    }
  });
}

// ===== Subscribe Section =====
ScrollReveal().reveal(".subscribe__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

// ===== Swiper (Sliders) =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".swiper").forEach((container) => {
    new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      pagination: {
        el: container.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: container.querySelector(".swiper-button-next"),
        prevEl: container.querySelector(".swiper-button-prev"),
      },
    });
  });
});

// Initialize all Swipers
document.querySelectorAll('.swiper').forEach((swiperEl, index) => {
  new Swiper(swiperEl, {
    slidesPerView: 1.2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: { slidesPerView: 2.2 },
      1024: { slidesPerView: 3.2 }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


const clients = document.querySelectorAll('.client__card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function showClient(idx) {
  clients.forEach((c) => c.classList.remove('active'));
  clients[idx].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + clients.length) % clients.length;
  showClient(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % clients.length;
  showClient(index);
});

showClient(index); // initial display


ScrollReveal().reveal('.choose__image img', { ...scrollRevealOption, origin: 'left' });
ScrollReveal().reveal('.choose__content .section__subheader', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.choose__content .section__header', { ...scrollRevealOption, delay: 700 });
ScrollReveal().reveal('.choose__list li', { ...scrollRevealOption, interval: 200 });


document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#calendarInput", {
      dateFormat: "d-m-Y",
      minDate: "today",
      allowInput: true
    });
  });


document.querySelector('.search-box .btn').addEventListener('click', function() {
  const sectionId = document.getElementById('country').value; // "package-Australia"
  if (!sectionId) return;
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelectorAll('.popular__card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    if (link) window.location.href = link;
  });
});
