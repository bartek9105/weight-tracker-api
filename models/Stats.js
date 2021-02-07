const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true
  },
  bmi: {
    type: Number,
    required: true
  },
  fat: {
    type: Number,
    required: true
  },
  muscleMass: {
    type: Number,
    required: true
  },
  water: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Stats', statsSchema)