require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
const APP_ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD learning project is running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: APP_ENV,
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;