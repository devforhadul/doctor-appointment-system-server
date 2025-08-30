const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    img: String,
    blogTitle: String,
    blogDescription: String,
    category: String,
    date: {
        type: Date,
        default: Date.now,
    },
})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;