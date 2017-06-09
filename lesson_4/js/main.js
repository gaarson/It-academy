// ООП

User.prototype.country = "Russia";

var user = new User("Влад", 38);
user.country = "USA";

var user1 = new User('Timur', 12);

// Инкапсуляция

function Employee(_name, _age, _comp) {
	User.call(this, _name, _age);

	this.name = _name;
	this.age = _age;
	this.comp = _comp;

	var salary = 10000;

	this.getSalary = function() {
		console.log('Зарплата ' + salary);
	}
}

Employee.prototype = Object.create(User.prototype);

var employee = new Employee("Виктор", 50, "KAMAZ");

employee.getSalary();


// call and apply 
Function.prototype.hello = function() {
	console.log('hello');
}

function display(data) {
	console.log(data);
	console.log(this);
	this.go();
}


display.call(employee, 'Text');





