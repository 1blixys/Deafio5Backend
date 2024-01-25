
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const MongoStore = require("connect-mongo")
const Product = require("../models/products.js");


router.get("/register", (req, res) => {
    res.render("register");
});


router.post("/register", async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const user = new User({ first_name, last_name, email, age, password });
        await user.save();
        res.redirect("/login");
    } catch (error) {
        console.error("Error durante el registro:", error); 
        res.status(500).send(`Error de registro: ${error.message}`); 
    }
});


router.get("/login", (req, res) => {
    res.render("login");
});


router.post("/login", async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send("Error de inicio de sesión");
    }
});

router.get("/products", async (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    const { first_name, last_name, email, age } = req.session.user;

    try {
       
        const products = await Product.find(); 

        res.render("products", { first_name, last_name, email, age, products });
    } catch (error) {
        console.error("Error al obtener productos de la base de datos:", error);
        res.status(500).send("Error al obtener productos");
    }
});

module.exports = router;