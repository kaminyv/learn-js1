// Lesson 2 - task 4
var a = parseInt(prompt('Enter a value from 0 to 15')),
	message = '';

switch (a) {
	case 0: message += ' 0';
	case 1: message += ' 1';
	case 2: message += ' 2';
	case 3: message += ' 3';
	case 4: message += ' 4';
	case 5: message += ' 5';
	case 6: message += ' 6';
	case 7: message += ' 7';
	case 8: message += ' 8';
	case 9: message += ' 9';
	case 10: message += ' 10';
	case 11: message += ' 11';
	case 12: message += ' 12';
	case 13: message += ' 13';
	case 14: message += ' 14';
	case 15: message += ' 15'; break;
	default: message = 'Entered a number not in the range from 0 to 15';
}

alert(message);