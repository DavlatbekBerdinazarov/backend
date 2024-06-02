const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const requestTime = require('./middlewares/request-time')

// middleware
app.use(requestTime);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({}));
app.use(express.static('static'));


// Routes

const postRoutes = require("./routes/post.route");
const authRoutes = require("./routes/auth.route");

app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);

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


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
