"use strict";

//Selecting elements
const nav = document.querySelector(".header__navigation");

//Smooth scrolling for sections navigation
nav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header__navigation-item")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
