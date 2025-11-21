// routes/game.routes.js
const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// GET todos
router.get('/', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

// GET por plataforma
router.get('/platform/:platform', async (req, res) => {
  const games = await Game.find({ platform: req.params.platform });
  res.json(games);
});

// POST crear nuevo
router.post('/', async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;