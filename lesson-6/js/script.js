var cart = {};

function init() {
	var productItem = document.querySelectorAll('.list-item');
	for (var i = 0; i < productItem.length; i++) {
		productItem[i].onclick = addCart;
	}
}

function cartInit() {
	var cartHTML = document.getElementById('cart');
	var headerTable = ['Name', 'quantity', 'price', 'amount'];
	var sum = 0;

	cartHTML.innerHTML = '<h2>Cart</h2>';

	var table = document.createElement('table');
	var tbody = document.createElement('tbody');
	var rowHeader = document.createElement('tr');
	for (var i = 0; i < headerTable.length; i++) {
		var td = document.createElement('th');
		td.appendChild(document.createTextNode(headerTable[i]));
		rowHeader.appendChild(td);
	}
	tbody.appendChild(rowHeader);

	for (var key in cart) {
		var row = document.createElement("tr");
		var td = document.createElement('td');
		td.appendChild(document.createTextNode(key));
		row.appendChild(td);
		for (var keyEl in cart[key]) {
			td = document.createElement('td');
			td.appendChild(document.createTextNode(cart[key][keyEl]));
			row.appendChild(td);
		}
		tbody.appendChild(row);

		sum += cart[key].amount;
	}

	table.appendChild(tbody);
	cartHTML.appendChild(table);

	cartHTML.innerHTML += '<p>All amount: ' + sum + '<p>';
}

function addCart(eventObj) {
	if (eventObj.target.className == 'btn__addcart') {
		var productName = this.querySelector('.list-item__title').innerText,
			productPrice = Number(this.querySelector('.list-item__price').innerText);

		if (productName in cart) {
			cart[productName].quantity += 1;
			cart[productName].amount = cart[productName].quantity * cart[productName].price;
		} else {
			cart[productName] = { quantity: 1, price: productPrice, amount: productPrice };
		}

		cartInit();
		// console.log(productName + productPrice);
		// console.log(eventObj.target.tagName);
	}
}
window.onload = init;