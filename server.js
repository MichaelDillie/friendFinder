// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PROT || 8088;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/htmlRoutes")(app);

// Starts server
app.listen(PORT, function() {
  console.log("App listeing on PORT " + PORT);
});
