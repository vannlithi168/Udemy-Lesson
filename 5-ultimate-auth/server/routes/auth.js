const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.json({
    data: "You hit sign up end point",
  });
});

module.exports = router;
