import {User} from './classes/user.js';
import request from 'superagent';

const age = document.getElementById('age');
const name = document.getElementById('name');
const addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
	let data = {
		age: age.value,
		name: name.value
	};

	request
		.post('/add_user')
		.send(data)
		.end((err, res) => {
			if(err) return console.log(err);
			console.log(res)
			if(res.text == 'success') render();
		})
})

const render = () => {
	document.getElementById('list').innerHTML = "";
	request
	.get('/list')
	.end((err, res) => {
		const users = res.body;

		users.forEach(item => {
			new User(item.name, item.age).renderUser(item.id);
		})
		for(let i = 0; i < document.getElementsByClassName('Delete').length; i++)
			document.getElementsByClassName('Delete')[i].addEventListener('click', (e) => {
				deleteUser(e.target.dataset.userid);
			})
	})
}
render();

const deleteUser = (id) => {
	request
		.delete(`/delete/${id}`)
		.end((err, res) => {
			if(err) return console.log(err);
			console.log(res)
			if(res.text == 'success') render();
		})
}



// var user1 = new User('Vasya', 14);
// display();
// user1.renderUsers();