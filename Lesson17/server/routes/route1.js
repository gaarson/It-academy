const express = require('express'),
	  path = require('path'),
	  fs = require('fs'),
    usersModel = require('../models/users.js'),
	  router = express.Router();
	  YouTubeModel = require('../models/index.js');

const file = fs.readFileSync(path.join(__dirname, '../userlist.json'));

const userList = JSON.parse(file);
//let TOKEN = await YouTubeModel.getToken();

router.get('/list', (req, res) => {
  usersModel.getUsers().then(users => {
    res.send(users);
  });
});

router.get('/videos', (req, res) => {
	let videoName = req.query.name;

	YouTubeModel.getChannel(TOKEN).then(data => {
		res.json(data);
	}).catch(err => {
		return console.log(err);
	});

	console.log(req.query);
})

router.post('/add_user', (req, res) => {
	console.log(req.body)
  
  usersModel.newUser(req.body).then(success => {
    res.json(success);
  }).catch(err => {
    console.log('ERROR', err);
  })
	//if(req.body.name!='' && req.body.age!=''){
		//let newUser=req.body;
		//newUser.id= +new Date();
		//userList.push(newUser);
		//// fs.writeFileSync(path.join(__dirname,'../userlist.json'), JSON.stringify(userList));
		//res.send(userList);
	//}else{
		//res.send("Empty field");
	//}
})

router.delete('/delete/:id', (req,res)=>{
	userList.map( function (item) {
		console.log('item '+item['id']);
		console.log('params '+req.params['id']);
		if (item['id']==req.params['id']){
			userList.splice(userList.indexOf(item),1);
			// fs.writeFileSync(path.join(__dirname,'../userlist.json'), JSON.stringify(userList));
		};
	})
	res.send(userList);
	// console.log(userList);
})

router.put('/put/:id', (req,res)=>{
	if(req.body.name!='' && req.body.age!=''){
		userList.map(function (item) {
		if (item['id']==req.params['id']){
			userList.splice(userList.indexOf(item),1,req.body);
			// fs.writeFileSync(path.join(__dirname,'../userlist.json'), JSON.stringify(userList));
			};
		})
	res.send(userList);
	} else {res.send('Empty field')}
	
})

module.exports = router;
