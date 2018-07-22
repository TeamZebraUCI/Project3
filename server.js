const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

//==========================Requiring the `User` model for accessing the `users` collection
const User = require("./userModel.js")

//==========================Configure middleware here
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


app.use(session({
  secret: config.secret,
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge: (1000*60*60*24*14) //this is 14 days
    }
 }))


//==========================Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017",
  { useNewUrlParser: true }
);

//add routes, both api and view
app.use(routes);

//Set up promises with mongoose
mongoose.Promise = global.Promise;

//===========================Route to post our form submission to mongoDB via mongoose
app.post("/login", function(req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

User.create({name: 'john', pass: 'test'})

// Start the API server
app.listen(PORT,()=>{
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

