const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Patient name is required"],
    trim: true // Automatically cleans up accidental spaces like " John Doe "
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [0, "Age cannot be negative"] // Prevents invalid data entries
  },
  disease: {
    type: String,
    required: [true, "Disease/Symptom description is required"],
    trim: true
  },
  date: {
    type: Date, // Changed from String to Date
    required: [true, "Appointment date is required"]
  }
}, { 
  timestamps: true // Automatically injects 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model("Appointment", appointmentSchema);