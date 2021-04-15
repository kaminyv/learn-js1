// Lesson 4 - Task 1
function numInObject(params) {
	var numObject,
		num = String(params);
	switch (num.length) {
		case 1: return numObject = { 'Единицы': num[0] };
			break;
		case 2: return numObject = { 'Единицы': num[1], 'Десятки': num[0] };
			break;
		case 3: return numObject = { 'Единицы': num[2], 'Десятки': num[1], 'Сотни': num[0] };
			break;
		default:
			return console.log('Введено число больше 999 или строка'), numObject = {};
	}
}
