const headerTag = document.querySelector("header");
const backButton = document.querySelector("#back_to_top");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const mobButton = document.querySelector("#mob_button");

const mobMenu = () => {
  for (const link of links) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerTag.classList.add("scroll");
    backButton.style.display = "block";
  } else {
    headerTag.classList.remove("scroll");
    backButton.style.display = "none";
  }
};

mobButton.addEventListener("click", mobMenu);
backButton.addEventListener("click", getToTop);
