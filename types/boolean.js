// What is a boolean?
// they are either true true / false

/*
x = 5 <-- Neved do this
var x = 5 <-- dont do this either
let x = 5 <-- when you might change the value
const x = 5 <-- when you want the value to stay the same
*/
// creating a new varaible (2 steos)
// Declartion
let y;
//Initalization / varaible assignment 
y = 5;

// How can we make booleans?
let x = Boolean(5) // Function that turns something to a bool

x = Boolean(0) // reassignment 
console.log(x)

let z = false;
console.log(typeof z)

let result = 5 > 4
/*
== checks for equality
>= 
>
<=
<

&& returns true if both (a &&b) are true
|| return true if either (a || b) are true
*/
let flippedBool = !true
//console.log(flipperBool)
console.log(flippedBool)
console.log(!true || false)

// Truthy // Falsey
// Truthy 'test', [1 ,2] {test:5 }. 1
let testResult = Boolean ([1,2])
testResult = Boolean("test")
console.log(testResult)

//Falsey 0, "", {}, null, undeifed, NaN
let falseyTest = Boolean()
// If you try to turn an empty [], {}
// you get back true
console.log(falseyTest)

//Bonus
let boolConv = !!("teststring") // This is just for exposure
console.log(boolConv)


// Why are they Useful