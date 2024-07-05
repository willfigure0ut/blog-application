const mongoose = require("mongoose")

const blogsSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Blogs = mongoose.model("Blogs", blogsSchema)

module.exports = Blogs