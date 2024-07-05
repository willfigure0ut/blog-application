const express = require("express");
const handleSignup = require("../handlers/handleSignup")
const handleLogin = require("../handlers/handleLogin");
const handleLogout = require("../handlers/handleLogout");


const router = express.Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin)
router.get("/logout", handleLogout)

module.exports = router;