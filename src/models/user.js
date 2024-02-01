const mongoose = require("mongoose");

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: String,
  required: true,
  last_name: String,
  required: true,
  email: String,
  required: true,
  unique,
  age: Number,
  required: true,
  password: String,
  required: true,
});

module.exports = mongoose.model("user",userCollection, userSchema);
