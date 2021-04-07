//Arrays
// -Arrays are used to store multiple values in a single variable
// _There are array methods that allow us to traverse, as well as mutate the data being stored within the array.
// -Array are 0 indeced, first value will have an index of 0, and the las will have an index of the array length - 1

let arr = [ ' first', 'second', 'third'];
console.log(arr[arr.lenght - 1]);

let arr2 = Array(3);
console.log(arr2.length);

// Foreach

let boardGames = ['Monoply', 'sorry', 'risk', 'clue'];
boardGames.forEach(function(game){
    console.log(game)
});

//Methods

//Arrays.push()
// Add an element to the end of an array
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.push('salt'));
console.log(shoppinglist);

//Array,pop()
//Removes the last element in our array, and it'll return that element
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
shoppinglist.pop();
console.log(shoppinglist);

//Array.unshift()
// Adds a new element to the beginning of the arry
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
shoppinglist.unshift('salt');
console.log(shoppinglist);

//Array.shift()
//Remove the first from the array and reurn that element
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
shoppinglist.shift();
console.log(shoppinglist);

//Array.mao()
// transforms the elements in the origina; array by calling the given funtion once for each element in the array
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.map((item) => item.toUpperCase()));

//Arrat.filter()
// Creates a new arrau with only the elemetns that pass the text in a given function
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.filter(item => item.startsWith('l')));

//Array.find()
// Returns the first element in an array that passes a test given as a function
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.find(item => item.startsWith('l')));

//Arrat.reduce()
// Executes a given funtion for each value of the array and reutrns a single value
let costs = [2.00, 3.00, 4.00, 5.00];
//console.log(costs.reduce((acc, currentValue)=> {
//}));

costs.reduce((acc, currentValue) => {
    console.log(acc, currentValue)
    return acc + currentValue;
});

let cost2 = [1, 1, 1, 1, 1];
console.log(cost2.reduce((acc, currentValue) => {
    return acc + currentValue
},10));

//Array.includes()
// Determines whether an array has a specefic element
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.includes('lime'))

//Array.indexOf()
//Search the array for a specefic element and returns its first index, and it will reutrn -1 if the element is not found
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.indexOf('lime'));

//Array.findIndec()
//Returns the index of the first element in an array that passes the test in a given funtion. Returns -1 when the element is not found
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.findIndex(item => item.startsWith('o')));

//Array.every()
//Checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the funtion returns false and does not check the rest of the elemtns
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.every(item => item.startsWith('l')));
console.log(shoppinglist.every(item => item.length > 1));

//Array.concat()
//Merge two arrays, and return a new array
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
let shoppinglist2 = ['eggs', 'sugar'];
console.log(shoppinglist.concat(shoppinglist2));

//Arrat.slice
// Selects a part of an array and reutrns a new array. Selects the elements starting at the provided start argument, and ends at, but does not include the provided end argument
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.slice(1,3));

//Array.splice()
//Add / removes elements in an array and returns the removed elements. first arguemnt takes in an interger that specedies at what index to add / remove the elements. second arguemnt takes in the number of items to be removed. opitional third argument takes in the new elements to be added to the array
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
shoppinglist.splice(2, 1, 'cherries');
console.log(shoppinglist);

//Array.sort()
// Sorts the items in an array. The sort order can either be alphabetic or numneric, and either ascedning or descening. By default sort() prders the values as strings in alphabetica and ascending order. Can take in a compare funtion which indicates if yoy want to sort by ascending or descening values
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.sort());

let costs = [3, 2, 67, 5];
//console.log(costs.sort((a , b) => a - b ));
console.log(costs.sort((a , b ) => b - a ));

//Array.reverse()
// Reverse the order of the elements in an array 
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.reverse());

//Array.toString()
// Convert an array into a string
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.toString());
let stringArr = shoppinglist.toString()
console.log(typeof stringArr);

//Arrat.join()
//Converts the elemetns of an array into a string. Can acept an optional parameter. "septerator", which indicates how the elements will be seperated. defult seperators is a comma
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
console.log(shoppinglist.join('!, and '));

//Spread opperator
//The spread operator, indicated by '...' 3 dots,expands the contens of an array and takes them out of the array structure
let shoppinglist = ['celery', 'lime', 'lemonds', 'salt', 'oranges'];
let arr2 = [1,2,3,4];
let values = [ ... shoppinglist];
console.log(values);