var name = "Nishant";
const name12 = "Nishant";


const id = 1;
let email = "nhnishantharkut@gmail.com";
var accountPassword = "Nishant23";
accountCity = "Jaipur";

console.log("=========================================");
// const cannot be changed
console.log("const cannot be changed");

console.log("before changing id : " + id);

// will throw an error :
// id = 2;

// console.log("after changing : " + id);
console.log("=========================================");

console.log("=========================================");


console.log("before changing : ");
console.table([accountPassword, email, accountCity])

accountPassword = "devanshi";
email = "nishant@gmail.com";
accountCity = "surat"

console.log("after changing : ");
console.table([accountPassword, email, accountCity])

console.log("=========================================");
console.log("let removes the scope problem that is block scope and functional scope of the var");
console.log("Never use the var declaration");

console.log("=========================================");