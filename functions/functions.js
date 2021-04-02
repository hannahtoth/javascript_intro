// name(data) => data out
// f(x) = x * x // sqr function
/*
way one : 
<keyword> <yourName>(<what i need to work){
    // what i do
    return <something>// what I want to give bacck 
}
*/

// Two ways to write a function in js
function sqr(x){
    return x * x // 5 * 5
}

console.log(sqr(5))

//let result = sqr(5)
//console.log(result)

let aSqr = (x) => {
    return x * x // Explicit return
}
let bMult = (x, y) => x * y 
let cSqr = x => x * x //Implicit return

function greet(){ // This needs no parameters to work
    console.log("Hello world")
}
greet()

function betterGreet(fName){ // This is one parameter function
    console.log("Hello " + fName)
}
betterGreet("Justin") // Passes in on argument 

let createFullName = (fName, lName) => {
    return `${fName} ${lName}`
}
let fullName = createFullName("Justin", "Ahmann")
console.log(fullName)

function add2(x, y){
    let z = 5 // this line is not returned from the function
   return x + y
}
console.log(add2(3,5))