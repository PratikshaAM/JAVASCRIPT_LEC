// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//()=>function defination and 2nd ()=>execution
//globle scope k pollution se problem hoti h toh 
//usey globle scope k jo variable hote h ussey hatane k liye iife ka use kia


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')