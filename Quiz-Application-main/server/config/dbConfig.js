const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/test";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the connection object
const connection = mongoose.connection;

// Event listener for successful connection
connection.on("connected", () => {
  console.log("MongoDB Connection Successful");
});

// Event listener for connection errors
connection.on("error", (err) => {
  console.log("MongoDB Connection Failed:", err.message);
});

module.exports = connection;
