// console.log(2 > 1); //true
// console.log(2 >= 1);  //true
// console.log(2 < 1); //false
// console.log(2 == 1); 
// console.log(2 != 1);


// console.log("2" > 1); //true ..convert to the same datatypes here number 
// console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true 

//== works differently than other comparison operators < > <= >= 
//comaprison is convert null to a number trating it as 0 
//therefore null>=0 is true and nul>0 is false

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===  strickly check -> value and datatype

console.log("2" === 2);  //false