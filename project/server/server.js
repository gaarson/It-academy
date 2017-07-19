const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let data = {}

express()
	.use('/', express.static(path.join(__dirname, '../public')))
	.use(bodyParser.json())
	.get('/api/data', (req, res) => res.json(data))
	.post('/api/data', (req, res) => res.json(data = req.body))
	.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))
	.listen(3333)