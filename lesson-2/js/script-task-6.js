// Lesson 2 - task 6

// Проверяем корректность ввода
function valid(param) {
	return isNaN(Number(param)) ? false : true;
}

// Функция суммы
function sum(arg1, arg2) {
	if (valid(arg1) && valid(arg2)) {
		return arg1 + arg2;
	} else {
		return console.log('incorrect argument');
	}
}

// Функция разности
function dif(arg1, arg2) {
	if (valid(arg1) && valid(arg2)) {
		return arg1 - arg2;
	} else {
		return console.log('incorrect argument');
	}
}

// Функция произведения
function inc(arg1, arg2) {
	if (valid(arg1) && valid(arg2)) {
		return arg1 * arg2;
	} else {
		return console.log('incorrect argument');
	}
}

// Функция деления
function div(arg1, arg2) {
	if (valid(arg1) && valid(arg2) && arg2 != '0') {
		return arg1 / arg2;
	} else {
		return console.log('incorrect argument');
	}
}

// Функция переключатель математических операций.
function mathOperation(arg1, arg2, operation) {
	switch (arguments[2]) {
		case 'sum': return sum(arguments[0], arguments[1]); break;
		case 'dif': return dif(arguments[0], arguments[1]); break;
		case 'inc': return inc(arguments[0], arguments[1]); break;
		case 'div': return div(arguments[0], arguments[1]); break;
	}
}