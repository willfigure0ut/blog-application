const express = require("express")
const authMiddleware = require("../middlewares/handleAuthentication")
const Blog = require("../models/blogs")


const router = express.Router()

router.get("/", authMiddleware,(req, res) => {
    res.render("home")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render('blogs', { blogs });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('An error occurred while fetching blogs');
    }
});

module.exports = router

