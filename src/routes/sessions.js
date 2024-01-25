const express = require("express")
const router = express.Router()
const User = require("../models/user.js")

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password }); 
        if (user) {
            req.session.user = user; 
            res.redirect("/products"); 
        } else {
            res.redirect("/login"); 
        }
    } catch (error) {
        res.status(500).send("Error de inicio de sesión");
    }
});

module.exports = router