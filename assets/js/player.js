// Créations des playlists Ambiance et Animation
const ambiance = document.getElementById("ambiance");
const animation = document.getElementById("animation");

for (let id = 0; id < arrayTracks.length; id++) {
  const track = document.createElement("section");
  track.classList.add("playlist__track");
  track.innerHTML = `
    <img class="sm-cover" src="/assets/pictures/sirens-call.png" alt="" />
    <h4>${arrayTracks[id].title}</h4>
    <div class="performer">${arrayTracks[id].performer}</div>
    <div class="cover">Cover by ${arrayTracks[id].cover}</div>
    <button class="btn-sm-music" idTrack="${id}">
        <img class="play" src="/assets/svg/play.svg" alt="" />
    </button>
`;
  if (arrayTracks[id].playlist === "ambiance") {
    ambiance.appendChild(track);
  } else {
    animation.appendChild(track);
  }
}

//-----------------------------------------------------------------------------------------------
//
const buttons = document.querySelectorAll("button.btn-sm-music");
const control = document.getElementById("control");
const player = document.getElementById("player");
const btnNext = document.getElementById("btn-next");
const btnReadAmbiance = document.getElementById("btn-read-ambiance");
const iconPause = '<img class="pause" src="/assets/svg/pause.svg" alt=""/>';
const iconPlay = '<img class="play" src="/assets/svg/play.svg" alt=""/>';
let btnMain = document.getElementById("btn-main");
let controlTitle = document.getElementById("control-title");
let currentSrc = null;
let currentBtnTrack = buttons[0];
let nextTrack = [1, buttons[1]];

function pause(btnTrack) {
  player.pause();
  btnMain.innerHTML = btnTrack.innerHTML = iconPlay;
}

function play(idTrack, btnTrack) {
  player.setAttribute("src", arrayTracks[idTrack].src);
  player.play();
  btnMain.setAttribute("idTrack", idTrack);
  btnMain.innerHTML = btnTrack.innerHTML = iconPause;
  controlTitle.textContent = arrayTracks[idTrack].title;
  currentBtnTrack = btnTrack;
}
function next() {
  const idNextTrack = parseInt(currentBtnTrack.getAttribute("idTrack")) + 1;
  const lenghtButtons = buttons.length;
  if (idNextTrack < lenghtButtons) {
    const nextBtnTrack = buttons[idNextTrack];
    currentBtnTrack.innerHTML = iconPlay;
    play(idNextTrack, nextBtnTrack);
  } else {
    play(0, buttons[0]);
  }
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const idTrack = buttons[i].getAttribute("idTrack");
    const btnTrack = buttons[i];
    currentSrc = player.getAttribute("src");
    const next = i + 1;
    nextTrack = [buttons[next].getAttribute("idTrack"), buttons[next]];
    //console.log("idTrack:" + nextTrack[0] + " btnTrack:" + nextTrack[1]);
    if (player.paused) {
      play(idTrack, btnTrack);
    } else if (currentSrc === arrayTracks[idTrack].src) {
      pause(btnTrack);
    } else {
      currentBtnTrack.innerHTML = iconPlay;
      play(idTrack, btnTrack);
    }
  });
}

btnMain.addEventListener("click", () => {
  const btnMainTrack = currentBtnTrack;
  const idTrackMain = btnMain.getAttribute("idTrack");
  if (player.paused) {
    play(idTrackMain, btnMainTrack);
  } else {
    pause(currentBtnTrack);
  }
});

btnNext.addEventListener("click", () => {
  next();
});

btnReadAmbiance.addEventListener("click", () => {
  play(0, buttons[0]);
});
player.addEventListener("ended", () => {
  btnMain.innerHTML = currentBtnTrack.innerHTML = iconPlay;
  next();
});
