const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    stock: Number,
    price: Number
})

module.exports = mongoose.model("product", productSchema)