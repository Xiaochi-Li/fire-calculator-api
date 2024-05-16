// Import Express
const express = require("express");
var mysql = require('mysql');

// Create a new Express application
const app = express();
const port = 3305; 

// TODO: hardcoded password and user for now, might need to change later
// Create a connection to the database
const database = mysql.createConnection({
  host: "localhost",
  user: "fjdlsajfel",
  password: "fjdsaljfksdla",
});

// Connect to the database
database.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("financial", require("./entities/financialProfile/financialProfile.routes"));

// Guard routes
app.use((req, res, next) => {
  const error = {
    status: 404,
    message: "Route not found",
  };
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  console.log("ERROR", error);
  res.json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
