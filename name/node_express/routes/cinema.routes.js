// routes/cinema.routes.js
const express = require('express');
const router = express.Router();
const Cinema = require('../models/Cinema');

router.get('/', async (req, res) => {
  const cinemas = await Cinema.find();
  res.json(cinemas);
});

module.exports = router;