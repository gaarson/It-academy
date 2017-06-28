function GetData(data) {
	console.log(this.name);
}

export default class User {
	constructor({name, age}, ...rest) {
		this.name = name;
		this.age = age;
		GetData.bind(this)();
	}

	renderUser(id) {
		document.getElementById('list').innerHTML += (`
			${this.name} and ${this.age} 
			<input type="submit" value="X" class="Delete" data-userId=${id}>
			</br>
		`)
	}

	walk() {
		console.log(this.name + "ходит");
	}
}

export class Admin extends User {
	constructor() {
		super({name: "user", age: 23});
	}

	walkLikeAdmin() {
		super.walk()
		console.log('like Admin');
	}
}