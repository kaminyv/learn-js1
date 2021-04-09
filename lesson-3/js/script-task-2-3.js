// Lesson 3 - Task 2 - 3
var cart = [['product-1', 1, 50], ['product-2', 2, 30], ['product-3', 100, 5]];

function countBasketPrice(param) {
	var sumCart = 0;
	for (var i = 0; i < param.length; i++) {
		sumCart += param[i][1] * param[i][2];
	}

	return sumCart;
}

alert('The cost of the items in the shopping cart:' countBasketPrice(cart));