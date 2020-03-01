const express = require ("express");
const mongoose = require ("mongoose");
const path = require("path")
const routes = require ("./routes/route-index");
const app = express ();
const PORT = process.env.PORT || 3003;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
  }

// Add routes, both API and view
 app.use(routes);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebook");

// Start the API server
app.listen(PORT, () => {
    console.log(` API Server now listening on PORT ${PORT}!`);
  });