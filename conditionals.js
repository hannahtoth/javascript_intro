// Conditional Statemnts 

/* Conditionals are used to execute a piece of code if a donfition is true. Tehy allow our code to makde a decision and carry out actions based on those decisions.
*/

// -If Statments
// -Switches
// -Ternaries

mathResult = 2 + 2 === 4;
console.log(mathResult);

if(mathResult) console.log('This equates to true');

//Block Body + Else

if(mayhResults){
    console.log('This equates to true');
}else{
    console.log('This equates to false');

};

//Chaining if/else statements
//else ifs allows use to provide a new condition to test if the conditions above are not met
let tempF = 'random';

if(tempF >95){
    console.log("It's hot!");

} else if(tempF >50){
    console.log("It's warm!")
} else if(temptF > 32){
    console.log("It's chilly!");
} else if(tempF <32)
{
    console.log("its freezing!");
} else {
    console.log("I cannot proced the weather");
}

//Testing multiple conditions
let myname = 'Hannah';
let age = 26;

if(myname === 'Hannah'){
    console.log('Name Logged');
} else if(age === 26){
    console.log('Age Logged');
} else if(myname === "Hannah" && age === 26){
    console.log('Name and Age logged');
}

//Switched 
// Run a block of code based on diffenents cases 

let tempF = 72;
switch(true){
    case tempF > 95:
    console.log("It's hot!");
    break;
    case tempF > 50:
        console.log("It's warm!");
    break;
    case tempF > 32:
        console.log("It;s freezing!")
};

let dog ='lab';

switch(dog){
    case 'husky':
    console.log("The husky jumped im the snow");
    break;
    case 'lab':
        console.log('the lab caught the ball');
    break;
    case 'shepard':
        console.
        log('the shepard did something');
};

let firstName = "Justin";
switch(firstName) {
    case 'Justin':
    case 'Amit':
    console.log('They are an instructor')
    break;
    default: console.log('they are a student');
}

//Ternairies
//Condition ? True : False

let lightSwitch = true;

lightSwitch ? console.log('Lights are on') : console.log('Lights are off');

tempF = 55;

tempF > 95 ? console.log("It;s hot!"):
tempF > 50 ? console.log("It's warm!"):
tempF < 32 ? console.log("It;s chilly!"):
tempF <= 32 ? console.log("It's freezing!"):
console.log("I cannot provide the weather!");

