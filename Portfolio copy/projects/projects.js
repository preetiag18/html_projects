const headerTag = document.querySelector("header");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerTag.classList.add("scroll");
  } else {
    headerTag.classList.remove("scroll");
  }
};
