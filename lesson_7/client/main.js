import {User} from './classes/user.js';
import request from 'superagent';

request
	.get('/list')
	.end((err, res) => {
		const users = res.body;

		users.forEach(item => {
			render(item);
		})
	
	})

const render = (user) => {
	console.log(user);
	new User(user.name, user.age).renderUser();
}

// var user1 = new User('Vasya', 14);
// display();
// user1.renderUsers();