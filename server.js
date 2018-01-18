var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require("path");

var port = process.env.PORT || 8080;
server.listen(port);

app.use(express.static(path.join(__dirname, 'www')));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});
