import { addUser } from './../requests/request.js';

export function searchUser(e) {
	let name;
	e && (name = e.target.value);

	let users = this.state.users;
	let userList = [];

	userList = users.filter(item => {
		if(!name) return false;

		let lowName = item.name.toLowerCase();
		let lowValue = name.toLowerCase();

		return lowName.indexOf(lowValue) != -1;
	})

	if(!userList.length) userList = users;

	console.log(userList);
	this.setState({userList});
}

export function setUserData(e) {
	let user = this.state.user;
	let users = this.state.users;

	switch(e.target.id) {
		case 'name':
			user.name = e.target.value;
			break;
		case 'age':
			user.age = e.target.value
			break;
		case 'add':
			addUser(user).then(newUser => {
				this.setState({users: users.push(newUser)});
			});
	}
	this.setState({user});
}