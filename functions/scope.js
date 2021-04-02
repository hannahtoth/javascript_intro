// Let Const Var ... others
let x = 5 // let will expose the variable to 
const favNum = 42 // const cant be reassigned to 
favNum = 50

var z = 10 // For now there are =
y = 5 // and should i say =ly bad
x = 9 // x is being reassigned <- this is fine

// Scope
if (true){ // this is a code block
    let x = 8 // x in here is not the x in line 2
    console.log(x)
}
console.log(x)
//console.log(i) // I had been garabged collected

for (var j = 0; j < 10; j++){
    console.log(j)
}
console.log(j)
console.log(j)
