var express = require('express');

var app = express.createServer(express.logger());

var infoToShow  = "testing";

app.get('/', function(request, response) {
  response.send(infoToShow);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
