const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
} catch (err) {
  console.log(err);
}

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello js" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
