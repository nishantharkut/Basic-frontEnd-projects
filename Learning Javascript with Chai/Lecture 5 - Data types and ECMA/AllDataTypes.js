// primitive data types
// ======================= 
// 1. String, 
// 2. Null, 
// 3.Number, 
// 4.Boolean, 
// 5.Undefined, 
// 6.Symbol (making something unique), 
// 7.bigInt
// =======================


// ---------SYMBOL----------------
const id = Symbol('12')
const idChanged = Symbol('12')

console.log(id === idChanged);


//reference data Types
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// 1. arrays
// 2. objects
// 3. Functions

// by default, the value is undefined

// let userEmail;
// console.log(typeof userEmail);


let heroes = ["nishant", "kanika", "harkut"];

let details = {
    name : "nishant",
    id : "2",
    description : "handsome and angry",
}

const myFunction = function(){
    console.log("hello");
    
}

console.log(myFunction());
