// seed/games.seed.js
const mongoose = require('mongoose');
const Game = require('../models/Game');

const games = [
  { title: "Super Mario Bros", developer: "Nintendo", year: 1985, platform: "NES", genre: "Plataformas" },
  { title: "The Legend of Zelda", developer: "Nintendo", year: 1986, platform: "NES", genre: "Aventura" },
  { title: "Sonic the Hedgehog", developer: "Sega", year: 1991, platform: "Mega Drive", genre: "Plataformas" },
  { title: "Street Fighter II", developer: "Capcom", year: 1991, platform: "Arcade", genre: "Lucha" },
  { title: "Final Fantasy VII", developer: "Square", year: 1997, platform: "PlayStation", genre: "RPG" },
  { title: "Pokémon Red", developer: "Game Freak", year: 1996, platform: "Game Boy", genre: "RPG" }
];

(async () => {
  await mongoose.connect('mongodb://localhost:27017/proyecto-basico-express-movies');
  await Game.deleteMany({});
  await Game.insertMany(games);
  console.log('6 videojuegos clásicos insertados');
  mongoose.disconnect();
})();