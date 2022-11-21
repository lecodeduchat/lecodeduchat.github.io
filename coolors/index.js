"use strict";
const btnGenerate = document.getElementById("generate");
const colors = document.querySelectorAll(".color");

function getRandomNumber(min, max) {
  let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
  randomNumber = randomNumber / 4294967296;
  return Math.floor(randomNumber * (max - min + 1) + min);
}

function generateColor() {
  let num = getRandomNumber(0, tabColors.length);
  let color = [tabColors[num].name, tabColors[num].hex];
  return color;
}
function newPalette() {
  let palette = [];
  colors.forEach((color) => {
    let colorInfoName = color.querySelector(".color_info-name");
    let colorInfoHexa = color.querySelector(".color_info-hexa");
    let newColor = generateColor();
    palette.push(newColor);
    if (palette.length > 1) {
      for (let i = 0; i < palette.length; i++) {
        if (palette[i][0] != newColor[0]) {
          colorInfoName.textContent = newColor[0];
          colorInfoHexa.textContent = newColor[1];
          color.style.backgroundColor = newColor[1];
        }
      }
    }
  });
}
newPalette();
// Création aléatoire d'une nouvelle palette de couleurs au touch ou avec la barre d'espace
btnGenerate.addEventListener("click", () => {
  newPalette();
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    newPalette();
  }
});
const moveColors = document.querySelectorAll(".fa-arrows-up-down");

// drag et drop des couleurs
const divColors = document.querySelectorAll(".color");
let dragged, bgColor;

for (let divColor of divColors) {
  divColor.ondragstart = (e) => {
    dragged = divColor;
    bgColor = divColor.style.backgroundColor;
    // On mémorise dans setData la valeur de la divColor de drag (départ)
    e.dataTransfer.setData("text/plain", divColor.innerHTML);
    divColor.classList.add("dragged");
  };
  divColor.ondragover = (e) => {
    e.preventDefault();
  };
  divColor.ondragenter = () => {
    divColor.classList.add("dropHover");
  };
  divColor.ondragleave = () => {
    divColor.classList.remove("dropHover");
  };
  divColor.ondragend = () => {
    divColor.classList.remove("dragged");
  };
  divColor.ondrop = (e) => {
    // On attibut à dragger le contenu de la divColor de la zone de drop (arrivée)
    dragged.style.backgroundColor = divColor.style.backgroundColor;
    dragged.innerHTML = divColor.innerHTML;

    // On attribut à divColor le contenu de la divColor de la zone de drag (départ)
    divColor.innerHTML = e.dataTransfer.getData("text/plain");
    divColor.style.backgroundColor = bgColor;
    divColor.classList.remove("dropHover");
  };
}
