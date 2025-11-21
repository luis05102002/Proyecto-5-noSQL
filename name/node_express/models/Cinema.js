
const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: String,
  rooms: { type: Number, min: 1, max: 30 }   
}, { timestamps: true });

module.exports = mongoose.model('Cinema', cinemaSchema);