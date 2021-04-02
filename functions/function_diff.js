// Hoisting

const add2 = (x, y) => { // arrow functions dont get hoisted
    return x + y
}
function adder(x, y){
    return x + y
}
console.log(add2(2, 5), adder(2, 5))

// helpers // other functions down here 
const add2 = (x, y) => {
    return x + y
}

function adder(x, y){ //functions can be defined after the call
    return x + y
}