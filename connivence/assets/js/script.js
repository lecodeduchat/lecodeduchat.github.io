const menu = document.getElementById("header__menu-content");
const btnMenuClose = document.getElementById("header__menu-header-close");
const btnMenu = document.getElementById("burger-menu");

btnMenu.addEventListener("click", () => {
  menu.style.right = "0px";
});
btnMenuClose.addEventListener("click", () => {
  menu.style.right = "-600px";
});

// Apparition du fond noir sous le header après scroll
const header = document.querySelector("header");
const screenHeight = 530;

window.addEventListener("scroll", () => {
  if (window.scrollY > screenHeight) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
