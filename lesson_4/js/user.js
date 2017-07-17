function User(_name, _age) {
	this.age = _age;
	this.name = _name;

	this.go = function() {
		console.log(this.name + ' Идет');
	}
}