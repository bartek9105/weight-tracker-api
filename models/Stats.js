const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
  weight: Number,
  bmi: Number,
  fat: Number,
  muscleMass: Number,
  water: Number,
}, { timestamps: true })

module.exports = mongoose.model('Stats', statsSchema)