/*// document.body.style.backgroundColor = "lightblue";
let date = new Date();

//document.body.innerHTML = "<h1>Today's date is " + date + "</h1>" //whole body will be replaced

document.getElementById("date").innerHTML = "<h1>Todays' date is " + date + "</h1>" //Date will be included along with body

document.body.style.backgroundColor = "blue";

/* Saturdays Task 
 * Get the name of your users dynamically
 * If your user is 'Vijyetha', display a paragraph for her in your website 
 * If your user is "Srikanth", display ANOTHER paragraph for him in your website
 * If your user is anyone one else, greet them(ex: Hello, John!) and display local time in your website
*
var userName = prompt("Enter your name");
console.log(userName);

//var sri = 'sri';

if (userName == 'sri') {
	let p = document.createElement("P");
	let t = document.createTextNode("Hello Annaaaaaaaaaaaaaaaaaaaaaaa");
	p.appendChild(t);
	document.body.appendChild(p);
}	else (userName == 'vijji') {
		let q = document.createElement("P");
		let s = document.createTextNode("Hello Vijjiiiiiiiiii");
		q.appendChild(s);
		document.body.appendChild(q);
	}
	
const BANDARU_FAMILY = {
	father: 'Chandra Sekhar Bandaru',
	mother: 'Chandra Kala Bandaru',
	age: 27,
	brother: {
		bro: 'sri',
		vadina: ''
	}
}

const myobject = {
	key: value, 
	key: value
}

 i == 10
 i === 10

!=
!==

// Install VS Code and import your project into that
// Print a pyramid   */
var i,j,k;

var i = Number(prompt("Enter the number")) + 1;
// console.log(Array(i).join("*"));

// for(i; i > 0; i = i-2) {
// 	console.log(Array(i).join("*"));
// }

for (let j = 0; j < i; j++) {
	let emptySpace = Array(j).join(" ");
	let bricks = Array(i).join("*");
	i = i-2;
	console.log(emptySpace + bricks);	
}

// debugger;
// //while (height >= 0 && height >= 23);
//     for ( j=0; j< i ; j++) {
//         console.log ("*");
// 	}
//     console.log("\n");
//     for ( k = 1; k>j-2; k--) {
//         console.log("*");
//     }

// document.body.innerHTML = "<p> pyramid is " + i + "</p>";


// Accept user input and put that value in i 
// Print '*' i times
// loop until i = 0 (On a new line, print '*' i-2 times)

// ********
//  ******
//   ***
//    *