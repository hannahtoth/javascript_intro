//While Loop
/*
legend:
    keyword = while
    1 = some eval or expression that is true or false
    
    <keyword> (<1>){
        //do somethung
}
*/

let i = 0
while(i <= 10){
    console.log(i)
    i++
}

for(let x=0; x<= 10; x++){
    for (let y=0; y<=10; y++){
   console.log(x, y, x * y)
    }
}


while(true){
    console.log("Help this loop is always true")
    break; // ? what does this do?
}

let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate"){
    break;
    }
}

//Break / Continue
//if there is a loop inside of a loop 'break' only takes you out of one

let counter = -1
while(counter <= 20){
    counter++
    if (counter % 2 === 1){ 
    console.log(counter)
    continue // ? what is this
}   
        console.log(counter)
    }

 for(let tmp=100; tmp<=0; tmp -= 5){
    console.log(tmp)
 }
    
 let myStart = 100
 while(myStart >= 0){
     console.log(myStart)
     myStart -= 5
 }
        
