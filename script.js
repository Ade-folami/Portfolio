"use strict";

//selecting elements
const aboutBtn = document.querySelector("#header__navigation-about");
const about = document.querySelector("#section__about");
const services = document.querySelector("#header__navigation-services");

aboutBtn.addEventListener(
  "click",
  about.scrollIntoView({ behavior: "smooth" })
);
