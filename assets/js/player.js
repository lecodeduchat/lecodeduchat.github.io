// Créations des playlists Ambiance et Animation
const ambiance = document.getElementById("ambiance");
const animation = document.getElementById("animation");

for (let elt in arrayTracks) {
  const track = document.createElement("section");
  track.classList.add("playlist__track");
  track.innerHTML = `
    <img class="sm-cover" src="/assets/pictures/sirens-call.png" alt="" />
    <h4>${arrayTracks[elt].title}</h4>
    <div class="performer">${arrayTracks[elt].performer}</div>
    <div class="cover">Cover by ${arrayTracks[elt].cover}</div>
    <audio id="${arrayTracks[elt].playlist}${arrayTracks[elt].order}">
        <source src="../assets/music/playlist-${arrayTracks[elt].playlist}/${arrayTracks[elt].src}"></source>
    </audio>
    <button class="btn-sm-music ${arrayTracks[elt].playlist}${arrayTracks[elt].order}">
        <img class="play" src="/assets/svg/play.svg" alt="" />
    </button>
`;
  if (arrayTracks[elt].playlist === "ambiance") {
    ambiance.appendChild(track);
  } else {
    animation.appendChild(track);
  }
}
//-----------------------------------------------------------------------------------------------
//
const buttons = document.querySelectorAll("button.btn-sm-music");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    play(buttons[i].classList[1], buttons[i]);
  });
}

function play(idTrack, btnTrack) {
  const player = document.getElementById(idTrack);
  if (player.paused) {
    player.play();
    btnTrack.innerHTML =
      '<img class="pause" src="/assets/svg/pause.svg" alt=""/>';
  } else {
    player.pause();
    btnTrack.innerHTML =
      '<img class="play" src="/assets/svg/play.svg" alt=""/>';
  }
}
