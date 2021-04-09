// Lesson 4 - Task 2
var cart = [
	{
		name: 'product1',
		quantity: 1,
		price: 50
	},
	{
		name: 'product2',
		quantity: 4,
		price: 210
	},
	{
		name: 'product2',
		quantity: 21,
		price: 12
	}
]


function countBasketPrice(param) {
	var sumCart = 0;
	for (var i = 0; i < param.length; i++) {
		sumCart += param[i].quantity * param[i].price;
	}

	return sumCart;
}

alert('The cost of the items in the shopping cart:' + countBasketPrice(cart));