// Lesson 2 - task 8

function power(val, pow) {
	if (pow <= 1) {
		return val;
	} else {
		return val * power(val, --pow)
	}
}

alert(power(2, 4));