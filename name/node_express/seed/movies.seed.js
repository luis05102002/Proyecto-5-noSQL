// seed/movies.seed.js
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
  { title: 'The Matrix', director: 'Hermanas Wachowski', year: 1999, genre: 'Acción' },
  { title: 'The Matrix Reloaded', director: 'Hermanas Wachowski', year: 2003, genre: 'Acción' },
  { title: 'Buscando a Nemo', director: 'Andrew Stanton', year: 2003, genre: 'Animación' },
  { title: 'Buscando a Dory', director: 'Andrew Stanton', year: 2016, genre: 'Animación' },
  { title: 'Interestelar', director: 'Christopher Nolan', year: 2014, genre: 'Ciencia ficción' },
  { title: '50 primeras citas', director: 'Peter Segal', year: 2004, genre: 'Comedia romántica' }
];

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/proyecto-basico-express-movies');
    console.log('Conectado a MongoDB');

    await Movie.deleteMany({});
    console.log('Películas antiguas eliminadas');

    await Movie.insertMany(movies);
    console.log(`${movies.length} películas insertadas correctamente`);

    console.log('¡BASE DE DATOS CREADA CON ÉXITO!');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    mongoose.disconnect();
  }
})();