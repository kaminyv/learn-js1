var cart = [];
function init() {
	var productItem = document.querySelectorAll('.list-item');
	for (var i = 0; i < productItem.length; i++) {
		productItem[i].onclick = addCart;
	}
}

function addCart(eventObj) {
	if (eventObj.target.className == 'btn__addcart') {
		var productName = this.querySelector('.list-item__title').innerText,
			productPrice = Number(this.querySelector('.list-item__price').innerText);

		console.log(productName + productPrice);
		console.log(eventObj.target.tagName);
	}
}
window.onload = init;