export function User(_name, _age) {
	this.name = _name;
	this.age = _age;

	this.renderUser = function() {
		document.write(`${this.name} and ${this.age} </br>`)
	}
}
