// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require("path");
const sgMail = require('@sendgrid/mail');
require("dotenv").config();

// Public Dir
// =============================================================
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});



// emial setup
// =============================================================

app.post('/sendEmail', function(req, res) {
  console.log(req.body)
  let Email = JSON.stringify(req.body.email)
  let Name = JSON.stringify(req.body.name)
  let Message = JSON.stringify(req.body.message)
  sgMail.setApiKey(process.env.setApiKey);
const msg = {
  to: 'william.stearns303@gmail.com',
  from: Email,
  subject: Name + "wrote you an email",
  text: Message,
  html: Name + " has a message for you. The message says:   " + Message +". ---- respond to:  " + Email,
};
sgMail.send(msg);
 
});


// Starts the server to begin listening
// =============================================================
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(error, response) {
  if (error) {
      console.log(error);
  }
  console.log(`Application listening on ${PORT}`);
 
})
