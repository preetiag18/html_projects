const header = document.querySelector("header");
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

mobButton.addEventListener("click", mobMenu);
