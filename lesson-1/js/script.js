// Begin task 1
var temperature = Number.parseFloat(prompt('Enter the temperature in Celsius:'));
temperature = Math.floor(((9 / 5) * temperature + 32) * 100) / 100;
if (isNaN(temperature)) {
	alert('You entered an incorrect temperature');
	window.location.reload();
} else {
	alert('Temperature in Fahrenheit: ' + temperature);
}
// End task 1

// Begin task 2
var admin, name;

name = 'Василий';

admin = name;

alert(admin);
// End task 2

// Begin task 3

alert(1000 + '108');

/* Все значения приводятся к строке и производится конкатенация */
// End task 3
