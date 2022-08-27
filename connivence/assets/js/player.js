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
const iconPause = '<img class="pause" src="/assets/svg/pause.svg" alt=""/>';
const iconPlay = '<img class="play" src="/assets/svg/play.svg" alt=""/>';
const buttons = document.querySelectorAll("button.btn-sm-music");
let tracks = [];
for (let i = 0; i < buttons.length; i++) {
  const idTrack = buttons[i].getAttribute("idTrack");
  const btnTrack = buttons[i];
  tracks.push({ id: idTrack, btn: btnTrack });
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
let currentPlaylist = [];
function pause(btnTrack) {
  player.pause();
  btnMain.innerHTML = btnTrack.innerHTML = iconPlay;
}

function play(idTrack) {
  const track = tracks.find((elt) => elt.id == idTrack);
  const btn = track.btn;
  console.log(arrayTracks[idTrack].src);
  player.setAttribute("src", arrayTracks[idTrack].src);
  player.play();
  btnMain.setAttribute("idTrack", idTrack);
  btnMain.innerHTML = btn.innerHTML = iconPause;
  controlTitle.textContent = arrayTracks[idTrack].title;
  currentTrack = {
    id: idTrack,
    button: btn,
    src: arrayTracks[idTrack].src,
  };
}
function next(idTrack, playlist) {
  for (let i = 0; i < playlist.length; i++) {
    if (idTrack === playlist[i].idTrack) {
      let j = i + 1;
      if (i != playlist.lenght - 2) {
        const idNextTrack = playlist[j].idTrack;
        const btnNextTrack = buttons[idNextTrack];
        nextTrack = {
          id: idNextTrack,
          button: btnNextTrack,
          src: arrayTracks[idNextTrack].src,
        };
      } else {
        nextTrack = {
          id: playlistAmbiance[1].id,
          button: buttons[1],
          src: playlistAmbiance[1].src,
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
    const idTrack = buttons[i].getAttribute("idTrack");
    if (player.paused) {
      console.log(idTrack);
      play(idTrack);
    } else if (currentTrack.src === arrayTracks[idTrack].src) {
      console.log(currentTrack.src);
      console.log(arrayTracks[idTrack].src);
      pause(btnTrack);
    } else {
      console.log("test");
      console.log(currentTrack.src);
      console.log(arrayTracks[idTrack].src);
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
  next(currentTrack.id, currentTrack.button);
  play(nextTrack.id);
});
btnReadAmbiance.addEventListener("click", () => {
  openControl();
  currentPlaylist = playlistAmbiance;
  play(playlistAmbiance[0].id);
});
player.addEventListener("ended", () => {
  btnMain.innerHTML = currentBtnTrack.innerHTML = iconPlay;
  next(currentPlaylist);
  play(nextTrack.id);
});
btnShuffleAmbiance.addEventListener("click", () => {
  openControl();
  shuffle(playlistAmbiance);
  const id = currentPlaylist[0].id;
  play(id);
});
