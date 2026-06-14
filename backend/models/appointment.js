const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    name: String,
    age: String,
    disease: String,
    date: String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);