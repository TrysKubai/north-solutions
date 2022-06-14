const hambuger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".side-navigation");
const links = document.querySelectorAll(
  ".side-navigation a, .right-side__language"
);
const lines = document.querySelectorAll(".line");

hambuger.addEventListener("click", () => {
  lines[0].classList.toggle("topLine");
  lines[1].classList.toggle("invisible");
  lines[2].classList.toggle("bottomLine");
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
//collapsible nav
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
