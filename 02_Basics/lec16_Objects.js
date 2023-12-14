// singleton constructor se bnta h
// Object.create => constructor method

// object literals  

const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //correct way to use symbol as key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//without square bracket value will come mykey1 but the type of key will be other not symbol
// console.log(JsUser.email) =>accesing object key value pair
// console.log(JsUser["email"]) =>2nd method
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//same object ko referernce karana ho to this use krna h
//object k andr jo bhi properties h wo mil  jayegi
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());