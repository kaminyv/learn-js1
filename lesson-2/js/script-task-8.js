// Lesson 2 - task 8

function power(val, pow) {
	if (pow == 1) {
		return val;
	} else {
		return val * power(val, --pow)
	}

	// return (val == 1) ? val : (val * power(val, --pow));
	// Более компактный вариант но выдает ошибку InternalError не могу понять почему.
}

alert(power(2, 4));