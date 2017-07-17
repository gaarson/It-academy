var NewCoffeeMachine = new CoffeeMachine();

var container = document.getElementById('coffee-container');
var resultContainer = document.getElementById('result');
var list = document.getElementsByClassName('coffeeItem');
var priceInput = document.getElementById('price');

NewCoffeeMachine.coffeeRender(container);

// priceInput.addEventListener('keyup', function(e) {
// 	console.log(e.target.value);
// })


for(var i = 0; i < list.length; i++)
	list[i].addEventListener('click', function(e) {
		console.log(e);
		NewCoffeeMachine.setCoffee(e.target.dataset.name, priceInput.value);
		result.innerHTML = NewCoffeeMachine.getDelivery();
	})

console.log(list);
