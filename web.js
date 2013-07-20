var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html");
  response.send(buf.toString());
});

app.get('/css/bitstarter.css', function(request, response) {
  var b = fs.readFileSync("css/bitstarter.css");
  response.setHeader('Content-Type', 'text/css');
  response.send(b.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
