const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps 🚀 - Capstone Project");
});

app.listen(4000, () => {
  console.log("App running on port 3000");
});
