const express = require('express');
const router = express.Router();
const doctorSchema = require('../schemas/doctorSchema');

router.get('/', async (req, res) => {
    try {
        const result = await doctorSchema.find();
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Server error" })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await doctorSchema.find({ _id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Sever error" });
    }
})

router.post('/', async (req, res) => {
    const newDoctor = new doctorSchema(req.body);
    try {
        const result = await newDoctor.save(
        );
        res.status(200).json({ mess: "Doctor added Successfully!" })
    } catch (err) {
        console.error("Error saving doctor:", err);
    }
})

router.delete('/doctor', async (req, res) => {

})

module.exports = router;
