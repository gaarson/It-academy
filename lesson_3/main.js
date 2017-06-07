var value = 0;

// Область видимости переменных локально, глобально, скрыто
function Func() {
	var value = 1;
	console.log(value);
}

//callbeck функции
function GetNumber(number, callback) {
	setTimeout(function() {
		return callback(number + 20);
	}, 1000);
}

// var newNumber = 0;
// GetNumber(10, function(n) {
// 	newNumber = n;
// 	console.log(newNumber);
// });
// console.log(newNumber);
var names = ['LALA', 'qwgqw', 'fqwgqw', 'gfqwgq'];
var x = 0
// while(x < names.length) {
// 	console.log(names[x]);
// 	x++;
// }

// do{	
// 	console.log(names[x]);
// 	x++;
// }while(x < names.length)

//рекурсия
function getFactorial(n) {
	if(n == 1) {
		return 1;
	} else {
		return n * getFactorial(n - 1);
	}
}

function getFibanachi(n) {
	if(n == 0) return 0;
	if(n == 1) return 1;

	else return getFibanachi(n - 1) + getFibanachi(n - 2);
} 
var result = getFibanachi(8);

//переопределение функций 
function display() {
	console.log('Привет');
	display = function() {
		console.log("Goodbye");
	}
}
var newDisplay = display;

function Car(name_, mileage_) {
	this.name = name_;
	this.mileage = mileage_;

	this.drive = function() {
		document.write('я поехала');
	}
}

var lada = new Car('granta', 10000);
var lexus = new Car('rx400', 2000);

console.log(lada.name);







