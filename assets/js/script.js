// Animation de la barre dégradée
const gradientColorBar = document.querySelector("#gradient-color-bar");
const header = document.querySelector("header");
const screenHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > screenHeight) {
    gradientColorBar.style.top = "0px";
    header.style.top = "4px";
  } else {
    gradientColorBar.style.top = "70px";
    header.style.top = "0px";
  }
});

//----------------------------------------------------------------------
// Animation des chats qui chantent
const musicHobby = document.getElementById("hobby-music");

// Fabricateur de notes de musique
const noteMaker = () => {
  const arrayNotes = [
    "/assets/svg/eighth-note.svg",
    "/assets/svg/half-note.svg",
    "/assets/svg/music-note.svg",
    "/assets/svg/quarter-note.svg",
    "/assets/svg/sixteenth-note.svg",
  ];
  // Création d'une variable aléatoire comprise entre 0 et 4 pour le choix d'une image issue du arrayNotes
  const choice = Math.round(Math.random() * 10 * 0.4);

  // cat left
  const noteLeft = document.createElement("img");
  noteLeft.classList.add("hobby-music");
  noteLeft.classList.add("cat-left");
  noteLeft.src = arrayNotes[choice];
  musicHobby.appendChild(noteLeft);

  // cat right
  const noteRight = document.createElement("img");
  noteRight.classList.add("hobby-music");
  noteRight.classList.add("cat-right");
  noteRight.src = arrayNotes[choice];
  musicHobby.appendChild(noteRight);

  // Modification de la variable css --left grâce à setProperty
  noteLeft.style.setProperty("--left", Math.random() * 100 + "%");
  noteRight.style.setProperty("--left", Math.random() * 100 + "%");

  // On fait disparaître les notes une fois l'animation terminée, évite l'accumulation des notes hors de l'image
  setTimeout(() => {
    noteLeft.remove();
    noteRight.remove();
  }, 6000);
};

setInterval(noteMaker, 500);

//----------------------------------------------------------------------
// Adapter la timeline en fonction de l'écran de l'utilisateur
const careerContent = document.querySelector("div.career.content");
const heightTimeLine = careerContent.clientHeight - 98 + "px"; // je soustrais la hauteur du h2 de 98px
const careerTimeLine = document.querySelector(".career__timeline");
careerTimeLine.style.setProperty("--heightTimeLine", heightTimeLine);
