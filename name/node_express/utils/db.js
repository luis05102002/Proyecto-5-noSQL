// utils/db.js  ← VERSIÓN ACTUALIZADA 2025
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/proyecto-basico-express-movies');
    console.log('MongoDB conectado correctamente');
  } catch (err) {
    console.error('Error conectando a MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };