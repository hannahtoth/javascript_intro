// Objects 

/*
syntax :
{
    k1: v1,
    k2: v2
}

keys can be in "" but don't have to be if they are valid var names,
i.e they dont start with a number or have invalid characters, or has spaces 
*/

//console.log(typeof console) 

let obj1 = {
    name: "justin"
}

let obj2 = {
    "name" : "amit"
}

//There are two ways to get things out of objects "dot" notations and
// :square bracket" noation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "jeep",
    model: "wrangler",
    year: 2020,
    miles: 10_000,
    owners: ["amy", "josh"]
}
console.log(car.miles)
console.log(car['miles'])
console.log(car.owners[1]) // obj can hold more than just primitive types

let person = {
    fName: 'Justin',
    lName: 'Ahmann',
    fullName: function(){
        return`${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return`${greetWord}, ${this.fName}`
    }
}
console.log(person.fName)
console.log(person.fullName())
console.log(person.greet('Hello'))

//This demo shows we can add new keys through assignment 
let builderObj = {} // an empty obj
console.log(builderObj)
builderObj.name = 'justin'
builderObj["age"] = 28
builderObj.greet = function(greetWord){
    return`${greetWord}, ${this.fName}`
}

console.log(builderObj)
console.log(builderObj.greet("Hello"))

// A look ahead STACKS and QUEUES <- we can build these with objects
// Stacks are LIFO (last in first out)
// Queues are FIFO (first in first) 

// A look ahead at "classes", special type of way to build an obj
let spot = {
    breed: "rottweiler",
    age: 3,
    bark: function(){
        return 'The ' + this.breed + "Barks!"
    }
}
console.log(spot.bark())

class Dog{
    constructor(bread, age){
        this.breed = bread
        this.age = age
    }
    bark = function(){
        return 'The ' + this.breed + ' Barks!'
    }
}

let fido = new Dog("lab", 10)
let lucky = new Dog("corgi", 12)
console.log(fido.bread)
console.log(lucky.breed)
let dogs = [new Dog ("lab", 25), new Dog ("corgi",25)]
dogs.forEach(dog => console.log(dog.bark()))

