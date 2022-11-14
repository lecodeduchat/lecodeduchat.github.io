"use strict";
const generate = document.getElementById("generate");
const colors = document.querySelectorAll(".color");

console.log(colors);

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
  colors.forEach((color) => {
    let colorInfoName = color.querySelector(".color_info-name");
    let colorInfoHexa = color.querySelector(".color_info-hexa");
    let newColor = generateColor();
    colorInfoName.textContent = newColor[0];
    colorInfoHexa.textContent = newColor[1];
    color.style.backgroundColor = newColor[1];
  });
}

// Création aléatoire d'une nouvelle palette de couleurs au touch ou avec la barre d'espace
generate.addEventListener("click", () => {
  newPalette();
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    newPalette();
  }
});
