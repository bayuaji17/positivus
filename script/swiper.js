const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 20,
});

const swiperMarquee = new Swiper(".swiper-marquee", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0.2,
    disableOnInteraction: false,
  },
});
const swiperTestmonial = new Swiper(".swiper-testimonial", {
  centeredSlides: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next-arrow",
    prevEl: ".swiper-button-prev-arrow",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  },
  on: {
    init: function () {
      renderCustomBullets(this);
    },
    slideChange: function () {
      renderCustomBullets(this);
    },
  },
});

function renderCustomBullets(swiperInstance) {
  const paginationContainer = document.querySelector(".custom-pagination");
  paginationContainer.innerHTML = "";

  for (let i = 0; i < swiperInstance.slides.length; i++) {
    const bullet = document.createElement("div");
    bullet.innerHTML =
      i === swiperInstance.activeIndex ? activeSVG() : inactiveSVG();
    bullet.classList.add("cursor-pointer");
    bullet.addEventListener("click", () => swiperInstance.slideTo(i));
    paginationContainer.appendChild(bullet);
  }
}

function activeSVG() {
  return `
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
              fill="#B9FF66"/>
          </svg>
        `;
}

function inactiveSVG() {
  return `
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
              fill="white"/>
          </svg>
        `;
}
