const express = require('express'),
	  path = require('path'),
	  userList = require('../coffee.js');
	  router = express.Router();

router.get('/list', (req, res) => {
	res.send(userList);
});

router.post('/add_user', (req, res) => {
	console.log(req.body);
	let newUser = req.body;
	if(newUser.age == "")
		res.send('no age');
	newUser.id = new Date();

	userList.push(newUser);
	res.send(newUser);
})

router.delete('/delete/:id', (req, res) => {
	console.log(req.params);
	res.send('succes');
})


module.exports = router;