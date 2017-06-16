var express = require('express');
var path = require('path');
var coffeeList = require('./coffee.js');
var app = express();

console.log(coffeeList);
app.use('/', express.static(path.join(__dirname, '../public/')))

app.get('/home', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/list', function(req, res) {
	res.send(coffeeList);
})

app.get('/', function(req, res) {
	res.send('Hello World!');
})

app.listen(3000, function() {
	console.log('server on ' + 3000);
})