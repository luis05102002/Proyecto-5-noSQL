// models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  developer: { type: String, required: true },
  year: { type: Number, required: true },
  platform: { type: String, required: true },
  genre: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);