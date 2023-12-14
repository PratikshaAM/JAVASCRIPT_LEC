//kis tarah data memory m rakha jata  h or access kia jata h 
//usey 2 data types hote h

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]; //reference type non primitive 

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

 
//Undefined => Undefined
//Null =>obj
//Boolean =>Boolean
//Number =>Number
//String=>String

//------------------------------------------------------
//stack(primitive) ,heap(non-primitive)
let name ="pam"
let name2 = name
name2= "pam2"
console.log(name) //pam
console.log(name2); //pam2

//heap madhe reference bhetato
//stack madhe copy of original one

