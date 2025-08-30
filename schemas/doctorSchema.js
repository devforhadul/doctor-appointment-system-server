const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  education: {
    type: String,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: false
  },
  workingPlace: {
    type: String,
    required: true
  },
  consultationFee: {
    type: Number,
    required: true
  },
  availabilityDays: {
    type: [String], // array of days
    required: true
  },
  location: {
    type: String,
    required: true
  },
  chamber: {
    address: { type: String, required: true },
    name: { type: String, required: true },
    visitDay: { type: String, required: true },
    visitHour: { type: String, required: true },
    contact: [{ type: String, required: true }]
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
