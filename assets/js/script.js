// Détecter la taille d'écran
let screenHeight = screen.height;
console.log(screenHeight);

// Détecter le scroll d'une page

window.onscroll = function () {
  animateBar();
};

function animateBar() {
  let scrollHeight = document.documentElement.scrollTop;
  let elt = document.querySelector("#gradient-color-bar");

  if (scrollHeight > screenHeight) {
    elt.style.top = "0px";
  } else {
    elt.style.top = "70px";
  }
}
