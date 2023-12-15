//this refer to the current context
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); =>{}
//empty obj 
//console.log(this) ; in terminal window of browser gives window
//browser m globle obj is window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //implicit return
//curly braces use kia to return keyword use krna he padega 
//paranthesis use kia to nahi use krna padega
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
//obj ko return krne ke liye paranthesis m wrap krna he pdega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()