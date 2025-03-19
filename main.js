"use strict";

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".site-nav");
const title = document.querySelector(".site-logo p ");
const menu = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const menuTwo = document.querySelectorAll(".desktop-nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  title.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    title.classList.remove("active");
  })
);

// active state of nav-links
document.addEventListener("DOMContentLoaded", () => {
  function removeActiveClass() {
    menu.forEach((link) => link.classList.remove("active"));
  }

  function updateActiveMenu() {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        removeActiveClass();
        document
          .querySelector(`.nav-link[href="#${section.id}"]`)
          .classList.add("active");
      }
    });
  }

  menu[0].classList.add("active");

  menu.forEach((link) => {
    link.addEventListener("click", (event) => {
      removeActiveClass();
      event.target.classList.add("active");
    });
  });

  window.addEventListener("scroll", updateActiveMenu);
});

// adding for desktop

document.addEventListener("DOMContentLoaded", () => {
  function removeActiveClass() {
    menuTwo.forEach((link) => link.classList.remove("active"));
  }

  function updateActiveMenu() {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        removeActiveClass();
        document
          .querySelector(`.desktop-nav-link[href="#${section.id}"]`)
          .classList.add("active");
      }
    });
  }

  menuTwo[0].classList.add("active");

  menuTwo.forEach((link) => {
    link.addEventListener("click", (event) => {
      removeActiveClass();
      event.target.classList.add("active");
    });
  });

  window.addEventListener("scroll", updateActiveMenu);
});
