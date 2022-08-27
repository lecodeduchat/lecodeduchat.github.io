const arrayTracks = [
  {
    id: 1,
    playlist: "ambiance",
    order: 1,
    title: "Lumière du jour",
    performer: "Michel Berger",
    cover: "Manu",
    src: "/assets/music/playlist-ambiance/lumiere-du-jour.mp3",
  },
  {
    id: 2,
    playlist: "ambiance",
    order: 2,
    title: "La rivière de notre enfance",
    performer: "Garou & Michel Sardou",
    cover: "Manu, Laurence, Sam et Mélissa",
    src: "/assets/music/playlist-ambiance/la-riviere-de-notre-enfance.mp3",
  },
  {
    id: 3,
    playlist: "ambiance",
    order: 3,
    title: "Against all odds",
    performer: "Phil Colins",
    cover: "Laurence et Mélissa",
    src: "/assets/music/playlist-ambiance/against-all-odds.mp3",
  },
  {
    id: 4,
    playlist: "ambiance",
    order: 4,
    title: "Hello",
    performer: "Adèle",
    cover: "Laurence et Mélissa",
    src: "/assets/music/playlist-ambiance/hello.mp3",
  },
  {
    id: 5,
    playlist: "animation",
    order: 101,
    title: "Eye in the sky",
    performer: "Alan project",
    cover: "Sam",
    src: "/assets/music/playlist-animation/eye-in-the-sky.mp3",
  },
  {
    id: 6,
    playlist: "animation",
    order: 102,
    title: "Sirens call",
    performer: "Cats and tree",
    cover: "Laurence et Mélissa",
    src: "/assets/music/playlist-animation/sirens-call.mp3",
  },
];
arrayTracks.sort((a, b) => a.order - b.order);
// Création des playlists avec .filter()
const playlistAmbiance = arrayTracks.filter(
  (elt) => elt.playlist === "ambiance"
);
const playlistAnimation = arrayTracks.filter(
  (elt) => elt.playlist === "animation"
);
// On réorganise les playlists en fonction de l'item order avec .sort()
playlistAmbiance.sort((a, b) => a.order - b.order);
playlistAnimation.sort((a, b) => a.order - b.order);
