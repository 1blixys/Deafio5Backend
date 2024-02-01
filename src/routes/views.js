const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const MongoStore = require("connect-mongo");
const Product = require("../models/products.js");

router.get("/register", (req, res) => {
  res.render("register");
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
  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }
    const { first_name, last_name, email, age } = req.session.user;
    let role = "";
    if (
      userEmail === "adminCoder@coder.com" &&
      userPassword === "adminCod3r123"
    ) {
      role = "admin";
    } else {
      role = "user";
    }
    {
      const products = await Product.find();
    }
    res.render("products", { first_name, last_name, email, age, products });
  } catch (error) {
    console.error("Error al obtener productos de la base de datos:", error);
    res.status(500).send("Error al obtener productos");
  }
});

module.exports = router;
