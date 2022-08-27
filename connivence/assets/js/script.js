const menu = document.getElementById("header__menu-content");
const btnMenuClose = document.getElementById("header__menu-header-close");
const btnMenu = document.getElementById("burger-menu");

btnMenu.addEventListener("click", () => {
  menu.style.right = "0px";
});
btnMenuClose.addEventListener("click", () => {
  menu.style.right = "-600px";
});
