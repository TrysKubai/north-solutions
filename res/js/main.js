const hambuger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".side-navigation");
const links = document.querySelectorAll(".side-navigation a");
const header = document.querySelector("header");
const lines = document.querySelectorAll(".line");

hambuger.addEventListener("click", () => {
  navToggle();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle();
  });
});

navToggle = () => {
  lines[0].classList.toggle("topLine");
  lines[1].classList.toggle("invisible");
  lines[2].classList.toggle("bottomLine");
  navLinks.classList.toggle("open");
  header.classList.toggle("fixed");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
};
