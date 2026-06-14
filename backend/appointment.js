const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: Date, required: true },
  disease: { type: String, required: true },
})

module.exports = mongoose.model('Appointment', appointmentSchema)