
const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const path = require("path")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/authUser")
const renderPage = require("./routes/renderPage")
const uploadBlogs = require("./routes/uploadBlogs")

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://diwakar:diwakar@cluster0.jmitywq.mongodb.net/blog-application?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use("/auth", userRouter)
app.use("/", renderPage)
app.use("/user", uploadBlogs)




app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

