'use strict';

//Create a forEach() function that takes an array of items and a function that runs the function arr.length number of times.
const dogNames = ['Rocket', 'Tulip', 'Mitsy', 'Bruce', 'Zoe'];

dogNames.forEach((dogNames) => {
  console.log(`My favorite dog is ${dogNames}`);
});


// Create a map() function that takes an array of items and a function that returns an array with each item manipulated by that function.
const test = [1, 2, 3, 4, 5, 6];
console.log(test.map((num, index) => num *2));




//Create a filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.
const dogNames = ['Rocket', 'Tulip', 'Mitsy', 'Bruce', 'Zoe'];
  const fiveLetter = dogNames.filter((dogNames) => {
    return dogNames.length === 5;
  });
  console.log(fiveLetter);
