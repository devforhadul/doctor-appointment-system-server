const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId: {
        type: String,
        required: true
    },
    user:{
        name: String,
        email: String,
        phone: Number
    },
    appointmentDate: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;