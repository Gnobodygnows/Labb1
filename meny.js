let y, text, x, k, j;

// Mål: visa en textbaserad meny för användaren, där man kan välja olika alternativ
import { getQuestion } from './readline.js'

const [question, close] = getQuestion()
// getQuestion returnerar två funktioner: question och close
// Använd funktionen question för att ställa en fråga till användaren
// Använd close sist i programmet


// let name = await question('Vad heter du?')
// console.log('Namn: ' + name);


// visa info för användaren
// vänta på input
// if-sats för vad man har skrivit
// upprepa
// &&  <- x och y
// ||  <- x eller y
let input = ''
while (input !== 'q') {
	console.log();
	console.log('Huvudmeny. Välj ett alternativ:');
	console.log('1. Figur A');
	console.log('2. Figur B');
	console.log('3. Figur C');
	console.log('4. Figur D');
	console.log('5. Figur E');
	console.log('6. Figur F');
	console.log('7. Figur G');
	console.log('8. Figur H');
	console.log('Q. Avsluta');
	input = await question('> ')
	input = input.toLowerCase()

	if (input == 'q') {
		console.log('Avslutar...');
		break;
	}
	else if (input === '1') {
		figurA()
	}
	else if (input === '2') {
		figurB()
	}
	else if (input === '3') {
		figurC()
	}
	else if (input === '4') {
		figurD()
	}
	else if (input === '5') {
		figurE()
	}
	else if (input === '6') {
		figurF()
	}
	else if (input === '7') {
		figurG()
	}
	else if (input === '8') {
		figurH()
	}
}

function figurA() {
	console.log('Visar figur A...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			k = y + x;
			if (x == 1) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurB() {
	console.log('Visar figur B...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 8; x >= 1; x--) {
			k = y + x;
			if (k == 9) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurC() {
	console.log('Visar figur C...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			k = y + x;
			if (x == 3 || x == 4 || x == 5) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurD() {
	console.log('Visar figur D...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			k = y + x;
			if (x == 3 || y == 3) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurE() {
	console.log('Visar figur E...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			k = y + x;
			if (x == 5 || k == 7) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurF() {
	console.log('Visar figur F...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			k = y + x;
			j = y - x;
			if (k == 7 || j == 0) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurG() {
	console.log('Visar figur G...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			k = y + x;
			if (x == 1 || x == 3 || x == 5 || x == 7) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text)
	}
}

function figurH() {
	console.log('Visar figur H...');
	for (y = 1; y <= 6; y++) {
		text = '';
		for (x = 1; x <= 8; x++) {
			if (y == 1 || y == 6 || x == 1 || x == 8) {
				text = String(text) + '.';
			}
			else if (y == 2 || y == 5 || x == 2 || x == 7) {
				text = String(text) + '#';
			}
			else {
				text = String(text) + '.';
			}
		}
		console.log(text);
	}
}
// Close behövs för att programmet ska sluta när det är färdigt
close()