const express = require('express');
const router = express.Router();
const appointmentSchema = require('../schemas/appointmentSchema');

router.get('/', async (req, res) => {
    try {
        const result = await appointmentSchema.find();
        res.status(200).send(result);

    } catch (error) {
        res.send(500).send({ error: "server error" })
    }
})

router.post('/', async (req, res) => {
    const newAppointment = new appointmentSchema(req.body);
    try {
        const result = await newAppointment.save();
        res.status(200).json({ mess: "Appointment booked" })
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Server Error'})
    }
})

module.exports = router;