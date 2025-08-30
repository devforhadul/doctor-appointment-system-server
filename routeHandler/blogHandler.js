const express = require('express');
const router = express.Router();
const blogSchema = require('../schemas/blogSchema');


router.get('/', async (req, res) => {
    try {
        const result = await blogSchema.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Server error" })
    }
})

router.post('/', async (req, res) => {
    const newBlog = new blogSchema(req.body);
    try {
       const result = await newBlog.save()
       res.status(200).json({mess: "Data saved succesfully"})
    } catch (error) {
       res.status(500).json({error: "server error"})
    }
})

module.exports = router