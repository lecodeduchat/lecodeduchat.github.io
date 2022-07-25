const animation = document.getElementById("animation");

for (let elt in playlistAnimation) {
  const track = document.createElement("section");
  track.classList.add("playlist__track");
  track.innerHTML = `
    <img class="sm-cover" src="/assets/pictures/sirens-call.png" alt="" />
    <h4>${playlistAnimation[elt].title}</h4>
    <div class="performer">${playlistAnimation[elt].performer}</div>
    <div class="cover">Cover by ${playlistAnimation[elt].cover}</div>
    <audio id="track${playlistAnimation[elt].order}">
        <source src="../assets/music/playlist-animation/${playlistAnimation[elt].src}"></source>
    </audio>
    <button class="btn-sm-music btn-music track${playlistAnimation[elt].order}">
        <img class="play" src="/assets/svg/play.svg" alt="" />
    </button>
`;
  animation.appendChild(track);
}
//-----------------------------------------------------------------------------------------------
// Test sur track1
const buttons = document.querySelectorAll("button.btn-music");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    play(buttons[i].classList[2], buttons[i]);
  });
}

function play(idTrack, btnTrack) {
  const player = document.getElementById(idTrack);
  console.log(btnTrack);
  if (player.paused) {
    player.play();
    console.log("je joue!!");
    btnTrack.innerHTML =
      '<img class="pause" src="/assets/svg/pause.svg" alt=""/>';
  } else {
    player.pause();
    console.log("je ne joue pas!");
    btnTrack.innerHTML =
      '<img class="play" src="/assets/svg/play.svg" alt=""/>';
  }
}
