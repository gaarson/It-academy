var value = [35235, 5235, 532];
var result = 25;
var text = 'asggggggggggggggggggggggggggggggggggggasgasgasgasgasg';

result = 10 / 5;

console.log(result);

var x = document.getElementById('number1')
var y = document.getElementById('number2')

// Объекты для взаимодействия с браузером и их методы
document.write(text + '</br>');
document.write(result);
console.log(x, y)
console.log(document.getElementById('1'));

document.getElementById('submit').addEventListener('click', function() {
	document.write(+x.value + +y.value);
}) 


