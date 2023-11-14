const express = require("express");

const app = express();

app.get("/api/signup", (req, res) => {
  res.json({
    data: "You hit sign up end point",
  });
});

const port = process.env.port || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
