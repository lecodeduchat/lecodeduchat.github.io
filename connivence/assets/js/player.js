// Créations des playlists Ambiance et Animation
const ambiance = document.getElementById("ambiance");
const animation = document.getElementById("animation");

arrayTracks.forEach((elt) => {
  const track = document.createElement("section");
  track.classList.add("playlist__track");
  track.innerHTML = `
    <img class="sm-cover" src="/connivence/assets/img/sirens-call.png" alt="" />
    <h4>${elt.title}</h4>
    <div class="performer">${elt.performer}</div>
    <div class="cover">Cover by ${elt.cover}</div>
    <button id="${elt.id}" class="btn-sm-music" idTrack="${elt.id}">
        <img class="play" src="/assets/svg/play.svg" alt="" />
    </button>
`;
  if (elt.playlist === "ambiance") {
    ambiance.appendChild(track);
  } else {
    animation.appendChild(track);
  }
});

//-----------------------------------------------------------------------------------------------
//
const control = document.getElementById("control");
const closeControl = document.getElementById("close-control");
const player = document.getElementById("player");
const btnNext = document.getElementById("btn-next");
const btnReadAmbiance = document.getElementById("btn-read-ambiance");
const btnShuffleAmbiance = document.getElementById("btn-shuffle-ambiance");
const btnReadAnimation = document.getElementById("btn-read-animation");
const btnShuffleAnimation = document.getElementById("btn-shuffle-animation");
const iconPause = '<img class="pause" src="/assets/svg/pause.svg" alt=""/>';
const iconPlay = '<img class="play" src="/assets/svg/play.svg" alt=""/>';
const buttons = document.querySelectorAll("button.btn-sm-music");
let tracksAndBtn = [];
for (let i = 0; i < buttons.length; i++) {
  const idTrack = buttons[i].getAttribute("idTrack");
  const btnTrack = buttons[i];
  tracksAndBtn.push({ id: idTrack, btn: btnTrack });
}

let btnMain = document.getElementById("btn-main");
let controlTitle = document.getElementById("control-title");
let currentTrack = {
  id: playlistAmbiance[0].id,
  button: buttons[0],
  src: playlistAmbiance[0].src,
};
let nextTrack = {
  id: playlistAmbiance[1].id,
  button: buttons[1],
  src: playlistAmbiance[1].src,
};
let currentPlaylist = arrayTracks;

// FUNCTIONS ************************************************
function pause(btnTrack) {
  player.pause();
  btnMain.innerHTML = btnTrack.innerHTML = iconPlay;
}

function play(idTrack) {
  buttons.forEach((elt) => {
    elt.innerHTML = iconPlay;
  });
  const track = tracksAndBtn.find((elt) => elt.id == idTrack);
  const btn = track.btn;
  const piste = arrayTracks.find((elt) => elt.id == idTrack);
  player.setAttribute("src", piste.src);
  player.play();
  btnMain.setAttribute("idTrack", idTrack);
  btnMain.innerHTML = btn.innerHTML = iconPause;
  controlTitle.textContent = piste.title;
  currentTrack = {
    id: idTrack,
    button: btn,
    src: piste.src,
  };
}
function next(idTrack, playlist) {
  for (let i = 0; i < playlist.length; i++) {
    if (idTrack == playlist[i].id) {
      let j = i + 1;
      if (i != playlist.length - 1) {
        const idNextTrack = playlist[j].id;
        const track = tracksAndBtn.find((elt) => elt.id == idNextTrack);
        const btnNextTrack = track.btn;
        nextTrack = {
          id: idNextTrack,
          button: btnNextTrack,
          src: playlist[j].src,
        };
      } else {
        nextTrack = {
          id: playlist[0].id,
          button: buttons[0],
          src: playlist[0].src,
        };
      }
    }
  }
}
function openControl() {
  control.style.bottom = "-1px";
}

// fonction shuffle du site url: https://fr.javascript.info/task/shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// EVENT LISTENER
closeControl.addEventListener("click", () => {
  control.style.bottom = "-90px";
});
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    openControl();
    const btnTrack = buttons[i];
    const idTrack = buttons[i].getAttribute("idTrack");
    const piste = arrayTracks.find((elt) => elt.id == idTrack);
    if (player.paused) {
      play(idTrack);
    } else if (currentTrack.src === piste.src) {
      pause(btnTrack);
    } else {
      currentTrack.button.innerHTML = iconPlay;
      play(idTrack);
    }
  });
}
btnMain.addEventListener("click", () => {
  if (player.paused) {
    play(currentTrack.id);
  } else {
    pause(currentTrack.button);
  }
});
btnNext.addEventListener("click", () => {
  next(currentTrack.id, currentPlaylist);
  play(nextTrack.id);
});
btnReadAmbiance.addEventListener("click", () => {
  openControl();
  currentPlaylist = playlistAmbiance;
  play(playlistAmbiance[0].id);
});
btnReadAnimation.addEventListener("click", () => {
  openControl();
  currentPlaylist = playlistAnimation;
  play(playlistAnimation[0].id);
});
player.addEventListener("ended", () => {
  btnMain.innerHTML = currentBtnTrack.innerHTML = iconPlay;
  next(currentPlaylist);
  play(nextTrack.id);
});
btnShuffleAmbiance.addEventListener("click", () => {
  openControl();
  currentPlaylist = arrayTracks.filter((elt) => elt.playlist === "ambiance");
  shuffle(currentPlaylist);
  const id = currentPlaylist[0].id;
  play(id);
});
btnShuffleAnimation.addEventListener("click", () => {
  openControl();
  currentPlaylist = arrayTracks.filter((elt) => elt.playlist === "animation");
  shuffle(currentPlaylist);
  const id = currentPlaylist[0].id;
  play(id);
});
