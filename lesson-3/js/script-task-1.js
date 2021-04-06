// Lesson 3 - Task 1

function isNatural(number) {
	for (var i = 2; i <= number / 2; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}

for (var i = 2; i <= 100; i++) {
	if (isNatural(i)) {
		console.log(i);
	}
}