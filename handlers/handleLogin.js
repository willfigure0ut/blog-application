const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey = 'ABCabc123@ojha'

let handleLogin = async (req, res) => {
    let {email, password} = req.body;
    

    try {
        const existingUser = await User.findOne({email, password});
        const payload = {
            userID: existingUser._id,
            email: email
        }
        const token = jwt.sign(payload, secretKey, {expiresIn: "48h"})
        
        if (existingUser) {
            res.cookie("token", token, {httpOnly: true, sameSite: "strict", secure: true})
            return res.render("home");
        }

        const emailExists = await User.findOne({email});
        if (emailExists) {
            return res.status(401).json({message: "Incorrect Password"});
        }

        return res.status(404).json({message: "User doesn't exist"});

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({message: `Internal server error: ${error.message}`});
    }
};

module.exports = handleLogin;