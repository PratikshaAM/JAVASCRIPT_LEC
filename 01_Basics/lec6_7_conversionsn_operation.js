let score = "hitesh"

console.log(typeof score);
console.log(typeof(score));

let score1 = "33abc"
let valueInNumber = Number(score1)
console.log(typeof valueInNumber) //number
console.log(valueInNumber); //NaN not a number

//if score1 = null ,undefined ,true ,string
//type number
//value = 0 ,NaN .1 ,nan

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); //33
// console.log(typeof stringNumber); //string



//************Operation ************************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);    

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); //e,hllo hitesh

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2");  //32

// console.log( (3 + 4) * 5 % 3);

 console.log(+true); //1
console.log(+""); //0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++ //100
++gameCounter; //101
console.log(gameCounter);


