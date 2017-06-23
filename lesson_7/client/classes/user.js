export function User(_name, _age) {
	this.name = _name;
	this.age = _age;

	this.renderUser = function() {
		document.getElementById('list').innerHTML += (`${this.name} and ${this.age} </br>`)
	}
}
