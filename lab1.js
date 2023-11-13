import { Console } from "console";

let y, text, x, k, j;

/*lab bild 1

for (y = 1; y <= 6; y ++) {
  text = '';
  for (x = 1; x <= 8; x ++) {
	k = y + x;
	if (x==1) {
	  text = String(text) + '#';
	} 
	else {
	  text = String(text) + '.';
	}
  }
  console.log(text)
}

*/

/*Lab bild 2

for (y = 1; y <= 6; y ++) {
  text = '';
  for (x = 8; x >= 1; x --) {
	k = y + x;
	if (k==9) {
	  text = String(text) + '#';
	} 
	else {
	  text = String(text) + '.';
	}
  }
  console.log(text)
}

*/

//Lab bild 3

// for (y = 1; y <= 6; y ++) {
// 	text = '';
// 	for (x = 1; x <= 8; x ++) {
// 	  k = y + x;
// 	  if (x==3 || x==4 || x==5) {
// 		text = String(text) + '#';
// 	  } 
// 	  else {
// 		text = String(text) + '.';
// 	  }
// 	}
// 	console.log(text)
//   } 

//Lab bild 4

/*for (y = 1; y <= 6; y ++) {
	text = '';
	for (x = 1; x <= 8; x ++) {
	  k = y + x;
	  if (x==3 || y==3) {
		text = String(text) + '#';
	  } 
	  else {
		text = String(text) + '.';
	  }
	}
	console.log(text)
  } */

//lab bild 5

// for (y = 1; y <= 6; y ++) {
//   text = '';
//   for (x = 1; x <= 8; x ++) {
//     k = y + x;
//     if (x==5 || k==7) {
//       text = String(text) + '#';
//     } 
// 	else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

//Lab bild 6

// for (y = 1; y <= 6; y ++) {
// 	text = '';
// 	for (x = 1; x <= 8; x ++) {
// 	  k = y + x;
// 	  j = y - x;
// 	  if (k==7 || j==0) {
// 		text = String(text) + '#';
// 	  } 
// 	  else {
// 		text = String(text) + '.';
// 	  }
// 	}
// 	console.log(text)
//   }

// Lab bild 7

//   for (y = 1; y <= 6; y ++) {
// 	text = '';
// 	for (x = 1; x <= 8; x ++) {
// 	  k = y + x;
// 	  if (x==1 || x==3 || x==5 || x==7) {
// 		text = String(text) + '#';
// 	  } 
// 	  else {
// 		text = String(text) + '.';
// 	  }
// 	}
// 	console.log(text)
//   } 

// Lab bild 8

// for (y = 1; y <= 6; y++) {
// 	text = '';
// 	for (x = 1; x <= 8; x++) {
// 	  if (y == 1 || y == 6 || x == 1 || x == 8) {
// 		text = String(text) + '.';
// 	  } 
// 	  else if (y == 2 || y == 5 || x == 2 || x == 7) {
// 		text = String(text) + '#';
// 	  } 
// 	  else {
// 		text = String(text) + '.';
// 	  }
// 	}
// 	console.log(text);
//   }

// Lab bild 9

// for (y = 1; y <= 6; y++) {
//     text = '';
//     for (x = 1; x <= 8; x++) { 
//       if (x%3===1) {
//         text += '.';
//       } else if (x%3===2) {
//         text += '#';
//       } else if (x%3===0) {
//         text += '0';
//       }
//     }
//     console.log(text);
//   }
for (y = 1; y <= 6; y++) {
	let text = '';
	for (x = 1; x <= 8; x++) {
		if (x % 3 === 1) {
			text += '.';
		} else if (x % 3 === 2) {
			if (y % 2 === 1) {
				text += '#';
			} else {
				text += '0';
			}
		} else if (x % 3 === 0) {
			if (y % 2 === 1) {
				text += '0';
			} else {
				text += '#';
			}
		}
	}
	console.log(text);
}