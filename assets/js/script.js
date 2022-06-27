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
  let header = document.querySelector("header");

  if (scrollHeight > screenHeight) {
    elt.style.top = "0px";
    header.style.top = "4px";
  } else {
    elt.style.top = "70px";
    header.style.top = "0px";
  }
}
let tableMusicNotes = document.querySelectorAll("li.music-notes");
function animateMusicNotes() {
  let positionTopNotes = ["35px", "10px", "20px", "50px"];
  let positionLeftNotes = ["90px", "120px", "150px", "60px"];

  for (let i = 0; i < 4; i++) {
    tableMusicNotes[i].style.top = positionTopNotes[i];
    tableMusicNotes[i].style.left = positionLeftNotes[i];
  }
  let elt = tableMusicNotes[3];
  tableMusicNotes.unshift("+elt+");
  tableMusicNotes.pop();
  animateMusicNotes();
}
animateMusicNotes();
