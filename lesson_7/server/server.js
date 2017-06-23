var express = require('express');
var path = require('path');
var userList = require('./coffee.js');
var app = express();

app.use('/', express.static(path.join(__dirname, '../public/')));

app.get('/home', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/list', function(req, res) {
	res.send(userList);
})

app.get('/', function(req, res) {
	res.send('Hello World!');
})

app.listen(3000, function() {
	console.log('server on ' + 3000);
})