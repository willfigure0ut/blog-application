const User = require("../models/user");

let handleSignup = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" });
        }

        const newUser = await User.create({ name, email, password });
        console.log(newUser);

        res.status(201).json({ message: "User created successfully", userId: newUser._id });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = handleSignup