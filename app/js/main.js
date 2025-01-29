import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

document.querySelectorAll(".desktop").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    link.blur();

    const header = document.querySelector(".header");
    header.classList.remove('scroll');

    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const currentScrollPos = window.scrollY;
      const offsetTop = targetSection.getBoundingClientRect().top + currentScrollPos - 30;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.cases__btn--next',
    prevEl: '.cases__btn--prev',
  },
  on: {
    slideChange: function () {
      document.querySelector('.cases__number').textContent = `Case #${this.realIndex + 1}`;
    }
  }
});