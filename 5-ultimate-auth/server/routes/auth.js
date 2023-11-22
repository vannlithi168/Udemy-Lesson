const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/auth");

const { userSignupValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignupValidator, runValidation, signup);

module.exports = router;
