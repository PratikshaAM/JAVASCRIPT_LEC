// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
//js array are resizable and can be mis data types
//array copy operation create the shallow copies 
//shallow copy =>shallow copy of an object is a copy whose properties share the same reference 
//i.e  jo bhi change hoga wo original array m bhi change hoga.
//Deep copies => do not share the samed referernce

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
//add element at the end

// myArr.pop()
//remove last element

// myArr.unshift(9)
//add the element at the start

// myArr.shift()
//remove the first element

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); // 3

// const newArr = myArr.join()

// console.log(myArr); //it will be array
// console.log( newArr); //join convert the array into string 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


//++++++++++++++++++++++++++++++++++++++++++++++++
//lec 15
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
 //array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //merge two array. Concat Returns the new array

const all_new_heros = [...marvel_heros, ...dc_heros] //spread 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//give one array simplified



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //convert array of string
console.log(Array.from({name: "hitesh"})) // interesting 
//give empty array have to spcify kashya vrun array creat krychah ahe key ka value vrun

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));