var coffee = [
	{	
		id: 1,
		name: "Руссиано",
		price: 39,
		sugar: ''
	},
	{
		id: 2,
		name: "Латте",
		price: 39,
		sugar: ''
	},
	{	
		id: 3,
		name: "Капучино",
		price: 39,
		sugar: ''
	},
	{
		id: 4,
		name: "Чай",
		price: 39,
		sugar: ''
	},
	{
		id: 521,
		name: "Эспрессо",
		price: 39,
		sugar: ''
	},
	{
		id: 14,
		name: "Макиато",
		price: 39,
		sugar: ''
	},
]

function CoffeeMachine() {
	var money = 0;
	var delivery = 0;

	this.coffeeList = coffee;
	this.selectedCoffee = [];
	this.fill = false;

	this.coffeeRender = function(container) {
		var coffee = this.coffeeList;
		console.log('check');
		container.innerHTML = '';
		coffee.forEach(function(item) {
			container.innerHTML += ( 
				`<li> 
					<p>${item.name}<p>
					<input 
						type="submit" 
						data-name=${item.id}
						value="Налить" 
						class="coffeeItem"> 
				</li>`
			);

		})
	}

	var setDelivery = function(id) {
		console.log(this.coffeeList);
		this.selectedCoffee = this.coffeeList.filter(function(item) {
			return item.id == id;
		});
		console.log(this.selectedCoffee);
		delivery = money - this.selectedCoffee[0].price;
	}

	this.getDelivery = function() {
		return delivery;
	}

	this.setCoffee = function(id, price) {
		money = price;
		console.log(this.selectedCoffee);
		setDelivery.call(this, id);
	}

	this.fillCoffee = function(container) {
		container.innerHTML = 'Налито ' + this.selectedCoffee;
	}



}