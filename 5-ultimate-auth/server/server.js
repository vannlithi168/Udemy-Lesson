const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:3000" }));
}

// connect to db
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// import route
const authRoutes = require("./routes/auth");

// app middlewares
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

exports.signup = (req, res) => {
  console.log("REQ BODY ON SIGNUP", req.body);
  res.json({
    data: "You hit sign up endpoint",
  });
};
