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
// Création aléatoire d'une nouvelle palette de couleurs au touch ou avec la barre d'espace
btnGenerate.addEventListener("click", () => {
  newPalette();
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    newPalette();
  }
});
// drag et drop des couleurs
const divColors = document.querySelectorAll(".color");
const moveColors = document.querySelectorAll(".fa-arrows-up-down");

moveColors.forEach((elt) => {
  elt.addEventListener("click", (e) => {
    let id = e.target.getAttribute("data-index");
    const divColor = document.querySelectorAll(`.color[data-index="${id}"]`);
    console.log(divColor);
  });
});
