const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const Route = require("./routers/route");

const app = express();
// Utiliser le middleware cors pour permettre les requêtes cross-origin
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//cors middleware
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// database connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/e-commerce", false)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

// routes
app.use(Route);
app.listen(3000);
