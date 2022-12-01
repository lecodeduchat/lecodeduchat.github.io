"use strict";
const main = document.querySelector("main");
const btnGenerate = document.getElementById("generate");
let palette = [];

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
function firstPalette() {
  for (let i = 0; i < 5; i++) {
    newColor();
  }
}
function newColor() {
  const color = generateColor();
  let id = color[1].slice(1, 7);
  const section = document.createElement("section");
  section.classList.add("color");
  section.draggable = true;
  section.innerHTML = `
        <div class="color_info">
          <div class="color_info-hexa">${color[1]}</div>
          <div class="color_info-name hidden">${color[0]}</div>
        </div>
        <div class="color_tools">
          <i class="fa-solid fa-xmark delete" data-color="${id}"></i>
          <i class="fa-solid fa-circle-half-stroke"></i>
          <i class="fa-solid fa-table-cells"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-arrows-up-down"></i>
          <i class="fa-solid fa-copy"></i>
          <i class="fa-solid fa-unlock"></i>
        </div>
        <div class="area">
          <div class="add_color" data-color="${color[1]}">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
  `;
  main.appendChild(section);
  section.style.backgroundColor = color[1];
  section.id = id;
  palette.push(color);
}

function newPalette() {
  const colors = document.querySelectorAll(".color");
  palette = [];
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
firstPalette();

function deleteColor() {
  let idColor = this.getAttribute("data-color");
  const colors = document.querySelectorAll(".color");
  colors.forEach((elt) => {
    if (elt.id == idColor) {
      elt.remove();
    }
  });
  let c = `#${idColor}`;
  let indexOf;
  for (let i = 0; i < palette.length; i++) {
    if (palette[i][1] == c) {
      indexOf = i;
    }
  }
  palette.splice(indexOf, 1);
  updateGrid();
}

const deletes = document.querySelectorAll(".delete");
deletes.forEach((elt) => {
  elt.addEventListener("click", deleteColor);
});

// Création d'une couleur supplémentaire via le bouton addColor

function addColor() {
  console.log(this);

  let colorBefore = this.getAttribute("data-color");
  console.log(colorBefore);

  newColor();
  let newC = palette.pop();
  console.log(palette, newC);
}
// addColor();

const addColors = document.querySelectorAll(".addColor");

addColors.forEach((elt) => {
  elt.addEventListener("click", addColor);
});

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

// mise à jour du css grid après suppression ou ajout d'une couleur
function updateGrid() {
  let nb = palette.length;
  main.style.gridTemplateColumns = `repeat(${nb} , 1fr)`;
}

// -------------------------------------------------------------------
// ------------------  drag et drop des couleurs ---------------------
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
