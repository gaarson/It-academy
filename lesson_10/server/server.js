var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, '../public/')));

app.get('/', function(req, res) {res.sendFile(path.join(__dirname, '../../public/index.html'))})
app.get('/home', require('./routes/user.js'));
app.get('/list', require('./routes/user.js'));
app.post('/add_user', require('./routes/user.js'));
app.delete('/delete/:id', require('./routes/user.js'));
app.get('*', (req, res) => {res.send('НЕ НАЙДЕНО')})


app.listen(3000, function() {
	console.log('server on ' + 3000);
})