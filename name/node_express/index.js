// index.js → VERSIÓN 100% FUNCIONAL Y CORREGIDA
const express = require('express');
const { connectDB } = require('./utils/db');

connectDB();

const app = express();
app.use(express.json());

// === RUTAS ===
app.use('/movies', require('./routes/movie.routes'));
app.use('/cinemas', require('./routes/cinema.routes'));
app.use('/games', require('./routes/game.routes')); // API EXTRA ORIGINAL

// Página principal con SIUUUUUUU
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial; text-align: center; margin-top: 80px;">
      <h1 style="font-size: 4rem; color: #222;">API PROMETEO - PROYECTO 5</h1>
      <h2 style="color: #C70101; font-size: 6rem; margin: 20px;">¡SIUUUUUUUUUUUUUU!</h2>
      <img src="https://media.tenor.com/67iB7B7g59YAAAAM/siu-ronaldo-siu.gif" alt="CR7 SIUUU" style="border-radius: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.5);" />
      <p style="font-size: 2rem; margin-top: 30px; color: green;">
        CRUD COMPLETO + CINES + VIDEOJUEGOS CLÁSICOS + CONTROL TOTAL DE ERRORES
      </p>
      <p style="font-size: 1.5rem; color: #555;">
        → <a href="/movies">/movies</a> | <a href="/cinemas">/cinemas</a> | <a href="/games">/games</a>
      </p>
    </div>
  `);
});

// MIDDLEWARE GLOBAL DE ERRORES
app.use((err, req, res, next) => {
  console.error('ERROR:', err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Datos inválidos',
      detalles: Object.values(err.errors).map(e => e.message)
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      error: 'Ya existe un registro con esos datos',
      campo: Object.keys(err.keyValue)[0],
      valor: Object.values(err.keyValue)[0]
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'ID inválido', id: err.value });
  }

  res.status(500).json({
    error: 'Error interno del servidor',
    mensaje: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
  });
});

// 404 - Ruta no encontrada (CORREGIDO: SIN COMILLAS EN *)
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    ruta_solicitada: req.originalUrl,
    método: req.method
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR ON → http://localhost:${PORT}`);
  console.log(`ABRE http://localhost:${PORT} Y DISFRUTA DEL SIUUUUUUU`);
});