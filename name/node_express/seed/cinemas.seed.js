// seed/cinemas.seed.js
const mongoose = require('mongoose');
const Cinema = require('../models/Cinema');

const cinemas = [
  { name: "Yelmo Cines Icaria", city: "Barcelona", address: "C/ Salvador Espriu 61", rooms: 15 },
  { name: "Cinesa Diagonal Mar", city: "Barcelona", address: "Av. Diagonal 3", rooms: 18 },
  { name: "Cines Verdi", city: "Barcelona", address: "C/ Verdi 32", rooms: 5 },
  { name: "Kinépolis Madrid", city: "Madrid", address: "C/ Edgar Neville", rooms: 25 }
];

(async () => {
  await mongoose.connect('mongodb://localhost:27017/proyecto-basico-express-movies');
  await Cinema.deleteMany({});
  await Cinema.insertMany(cinemas);
  console.log('Cines insertados');
  mongoose.disconnect();
})();