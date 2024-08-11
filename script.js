"use strict";

//SELECTING ELEMENTS IN THE DOM
const nav = document.querySelector(".header__navigation");
const aboutStn = document.querySelector("#section__about");
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const contactBtn = document.querySelector(
  ".section__home-description--buttons--contact"
);

//POP-UP MODAL FOR CONTACT
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
contactBtn.addEventListener("click", openModal);
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

//SMOOTH SCROLLING FOR SECTIONS NAVIGATION
nav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header__navigation-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//NAVIGATION FADING ON MOUSE HOVER
const handleHover = function (e) {
  if (e.target.classList.contains("header__navigation-item")) {
    const link = e.target;
    const siblings = link
      .closest(".header__navigation")
      .querySelectorAll(".header__navigation-item");
    const logo = link.closest(".header").querySelector(".header__logo");
    const btn = link
      .closest(".header__navigation")
      .querySelector(".header__navigation-button");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
      btn.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1.0));

//STICKY NAVIGATION BAR
const initialCoords = aboutStn.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  if (window.scrollY > initialCoords.top) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

//REVEAL SECTIONS ON SCROLL
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//SLIDER COMPONENT FOR PROJECTS
const proSlide = document.querySelectorAll(".project");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = proSlide.length;

//slide movement function
const goToSlide = function (slide) {
  proSlide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

//MOVE TO NEXT PROJECT
const nextProject = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

//MOVE TO PREVIOUS PROJECT
const prevProject = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnLeft.addEventListener("click", prevProject);
btnRight.addEventListener("click", nextProject);
