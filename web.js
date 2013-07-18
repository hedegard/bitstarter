 var fs = require('fs')


 var express = require('express');

 var app = express.createServer(express.logger());

 var infoToShow  = "testing";

 infoToShow = fs.readFileSync("index.html");
 infoToShow = infoToShow.toString();




app.get('/', function(request, response) {
  response.send(infoToShow);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
