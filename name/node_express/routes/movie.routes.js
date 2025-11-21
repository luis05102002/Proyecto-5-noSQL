// routes/movie.routes.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET todas
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET por _id
router.get('/id/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'Película no encontrada' });
    res.json(movie);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET por título
router.get('/title/:title', async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: new RegExp(req.params.title, 'i') });
    if (!movie) return res.status(404).json({ msg: 'No encontrada' });
    res.json(movie);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET por género
router.get('/genre/:genre', async (req, res) => {
  try {
    const movies = await Movie.find({ genre: req.params.genre });
    res.json(movies);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET desde 2010
router.get('/year/2010', async (req, res) => {
  try {
    const movies = await Movie.find({ year: { $gte: 2010 } });
    res.json(movies);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST - Crear película
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({ msg: 'Película creada', movie });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT - Actualizar
router.put('/id/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!movie) return res.status(404).json({ msg: 'No encontrada' });
    res.json({ msg: 'Película actualizada', movie });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/id/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ msg: 'No encontrada' });
    res.json({ msg: 'Película eliminada correctamente', movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;