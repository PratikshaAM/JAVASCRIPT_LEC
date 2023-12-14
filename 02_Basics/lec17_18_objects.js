// const tinderUser = new Object() //singlton method
const tinderUser = {}  //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); =>verify is full name is there or not

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } =>object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4) =>single object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);  


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //keys come inn format of array
// console.log(Object.values(tinderUser)); //same
// console.log(Object.entries(tinderUser)); //array =>array of key and value  

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//destructuring
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


//API  =>backend se jo values aati h uey kaise likhte h 


//JASON=>

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
  


//API in form of array
[
    {},
    {},
    {}
]
