let score = "1vsg"

console.log(score)
console.log(typeof score)
console.log(typeof(score))

console.log("============AFTER CONVERSION========");

let convertScoreToNumber = Number(score)
console.log(convertScoreToNumber)
console.log(typeof convertScoreToNumber)
console.log(typeof(convertScoreToNumber));

/*
after converting to number
"12" => number
"12fs" => NaN but will still give as the type as Number
"true" => 1 ; "false" => 0
*/


console.log("==========CHECKING FOR BOOLEAN=========");

// let isLoggedIn = true
// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "nishant"
console.log(isLoggedIn);
console.log(typeof isLoggedIn)
let convertToBoolean = Boolean(isLoggedIn)
console.log(convertToBoolean);
console.log(typeof convertToBoolean)
