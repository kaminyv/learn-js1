// Lesson 2 - task 3
var a = validNumber('Enter an integer A'),
	b = validNumber('Enter an integer B'),
	message;

// Проверяем корректность ввода. 
function validNumber(param) {
	var isNumber = parseInt(prompt(param));
	if (!isNaN(isNumber)) {
		return isNumber;
	}
	alert('Invalid number entered!');
	return validNumber(param);
}

// Формируем сообщение.
message = (a >= 0 && b >= 0) ? (a + ' - ' + b + ' = ' + (a - b)) :
	(a < 0 && b < 0) ? (a + ' * ' + b + ' = ' + (a * b)) :
		(a + ' + ' + b + ' = ' + (a + b)); // Попрактиковался с тернарным оператором.

/* if (a >= 0 && b >= 0) {
		message = a + ' - ' + b + ' = ' + (a - b);
	} else if (a < 0 && b < 0) {
		message = a + ' * ' + b + ' = ' + (a * b);
	} else {
		message = a + ' + ' + b + ' = ' + (a + b);
	}
*/

// Выводим.
alert(message);
