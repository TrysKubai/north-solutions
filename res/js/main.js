const hambuger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".side-navigation");
const links = document.querySelectorAll(".side-navigation a");
const header = document.querySelector("header");
const lines = document.querySelectorAll(".line");
const servicesContainer = document.querySelector(".services");

hambuger.addEventListener("click", () => {
  navToggle();
  serviceToggle();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle();
    if (window.innerWidth <= 1024) {
      serviceToggle();
    }
  });
});
//service section hack >:D
serviceToggle = () => {
  console.log(servicesContainer.style.display);
  if (
    servicesContainer.style.display === "" ||
    servicesContainer.style.display === "block"
  ) {
    servicesContainer.style.display = "none";
  } else {
    servicesContainer.style.display = "block";
  }
};
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
