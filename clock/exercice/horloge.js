// Reproduire l'horloge sur le gif, (attention, le cadran n'est qu'une image de fond)
const date = new Date();
const progress = document.querySelector(".bar>.progress");
const time = document.querySelector("time");
const handHour = document.querySelector(".hour");
const handMinute = document.querySelector(".minute");
const handSecond = document.querySelector(".second");
const stop = document.querySelector("main>button");
let cpt = 0;

// initialisation de l'horloge à l'heure du jour
function clock(date) {
  let rotateHour = (360 / 12) * date.getHours() - 90;
  let rotateMinute = (360 / 60) * date.getMinutes() - 90;
  let rotateSecond = (360 / 60) * date.getSeconds() - 90;
  handHour.style.transform = `rotate(${rotateHour}deg)`;
  handMinute.style.transform = `rotate(${rotateMinute}deg)`;
  handSecond.style.transform = `rotate(${rotateSecond}deg)`;
}
clock(date);
function timer(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  time.textContent = `
  ${hour < 10 ? "0" + hour : hour} : 
  ${minute < 10 ? "0" + minute : minute} : 
  ${second < 10 ? "0" + second : second}`;
}
function progressBar(date) {
  let widthProgress = (100 / 20) * cpt;
  progress.style.width = widthProgress + "%";
  cpt++;
}

const myInterval = setInterval(() => {
  const date = new Date();
  setTimeout(progressBar(date), 1000);
  timer(date);
  clock(date);
}, 1000);

// Configuration du bouton stop
stop.addEventListener("click", () => {
  clearInterval(myInterval);
  cpt = 0;
});

// span du footer
const year = date.getFullYear();
const spanFooter = document.querySelector("footer h3>span");
spanFooter.textContent = year;
