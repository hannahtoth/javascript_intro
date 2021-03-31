
let x = 5
let y = 5.0
let z = Number('5')
let r = Number('test')

console.table([x ,y ,z ,r ])

/*
Numbers:
Add +
Sub -
Multi *
Div /
Floor Div //
Exp **

MOD % <- Div and give back the remained
*/

console.log(8 ** 2)
console.log(12 % 5)

console.log(5 / 2)
console.log(Math.floor(5/2))

//Debug demo and bonus
let total = 0
let i = 0
while(1 <= 100){
    if(i % 2 == 0){
        console.log(i)
        total += i
    }
    i++
}
console.log(total)