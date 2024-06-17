"use strict";

//Selecting elements
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

//Contact pop-up
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

//Smooth scrolling for sections navigation
nav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header__navigation-item")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Navigation fading on hover
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

//Sticky navigation
const initialCoords = aboutStn.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) header.classList.add("sticky");
  else header.classList.remove("sticky");
});
