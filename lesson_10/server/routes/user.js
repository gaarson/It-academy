const express = require('express'),
<<<<<<< HEAD
	  path = require('path'),
	  userList = require('../coffee.js');
	  router = express.Router();
=======
      path = require('path'),
      fs = require('fs'),
      router = express.Router();

const file = fs.readFileSync(path.join(__dirname, '../coffee.json'));

const userList = JSON.parse(file);

console.log(userList);
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc

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
<<<<<<< HEAD
=======
  fs.writeFileSync(path.join(__dirname, '../coffee.json'), JSON.stringify(userList));
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc
	res.send('success');
})

router.delete('/delete/:id', (req, res) => {
	console.log(req.params);
	res.send('succes');
})


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 619a0bb24e165e72199b9623eb2cbd6c7f8d84fc
