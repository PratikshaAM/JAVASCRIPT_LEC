const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //false

console.log(gameName.split('-')); 

//lec12--------------------------------------------------------------

const score = 400
// console.log(score);  //400

const balance = new Number(100) //new object
// console.log(balance);  
//[Number:100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(1)); //100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 
//10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Math=>Object with many properties
// console.log(Math.abs(-4)); 
//4
// console.log(Math.round(4.6));
//5
// console.log(Math.ceil(4.2));
//5
// console.log(Math.floor(4.9));
//4
// console.log(Math.min(4, 3, 6, 8));
//3
// console.log(Math.max(4, 3, 6, 8));
//8

console.log(Math.random()); 
//Math.random values come between the 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)