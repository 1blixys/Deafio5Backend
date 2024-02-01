const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user === null) {
        res.status(400).json({
            message: "Usuario o contraseña incorrectos",
        });
    } else {
        req.session.user = email;
        if (req.session.email === "adminCoder@coder.com" && req.session.password === "adminCod3r123") {
            req.session.role = "admin";
        } else {
            req.session.role = "user";
        }
        res.status(200).json({
            message: "Login OK"
        });
    }
});

router.post("/logout", async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error al hacer el Logout" });
      }
    });
    res.send({ redirect: "http://localhost:8080/login" });
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;
    const user = new User({ first_name, last_name, email, age, password });
    await user.save();
    req.session.user = user;

    res.redirect("/products");
  } catch (error) {
    console.error("Error durante el registro:", error);
    res.status(500).send(`Error de registro: ${error.message}`);
  }
});

module.exports = router;
