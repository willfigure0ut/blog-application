const express = require("express")
const upload = require("../middlewares/uploadMiddleware")
const auth = require("../middlewares/handleAuthentication")
const handleUpload = require("../handlers/handleUpload")
const router = express.Router()

router.post("/create-blog", auth, upload.single('thumbnail'), handleUpload )

module.exports = router