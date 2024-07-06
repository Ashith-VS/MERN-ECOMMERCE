require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors= require('cors');
const router = require('./routes/Router');
const bodyParser = require('body-parser');
// const verifyToken = require('./middleware/authMiddleware');

const app = express();
const allowedOrigins = 'http://localhost:3000/'
app.use(cors({
  origin:allowedOrigins
}))

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
app.use(bodyParser.json())
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
// Register your routes
app.use("/", router)

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
