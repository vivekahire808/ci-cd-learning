const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD learning project is running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;