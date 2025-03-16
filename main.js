"use strict";

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".site-nav");
const title = document.querySelector(".site-logo p ");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  title.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  })
);
