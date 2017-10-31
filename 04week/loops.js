'use strict'

//1. Write For Loop
const carsInReverse = ['Tata', 'Yugo', 'VW', 'BMW'];
for (i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

//2a Write For..In Loop
var person = {
  firstname: 'Edward',
  lastname: 'Vidaurri',
  birthDate: 'Oct 13'
}
console.log(person);
//2b a for...in loop and if state associated with the key birthDate.
for (const bDay in person){
   if (bDay === 'birthDate'){
      console.log(person[bDay]);
   }
 }

//3. Write While Loop
var e = 0;
while (e < 13) {
  e++;
  console.log(e);
}

//4. Write Do While Loop
nums = 0;
do {
  nums += 1;
  console.log(nums);
} while (nums < 1000);

/*When is a for loop better than a while loop?
For loops are used when you know the amount of times you need to loop,
which makes it more efficient than While loops because they are used to loop
until an event returns false. For loops require more steps to execute which
can make code seem more complex */

/*What is the difference between a for loop and a for...in loop?
The for loop are all about having to do with doing the same thing over and over again
The for...in loop iterates or repeats over the enumerable properties of an object.
For each distinct property, statements can be executed.*/

/*The while loop creates a loop that executes a specific statement as
long as the condition remains true. The condition is evaluated before
executing the statement. The do...while loop creates a loop that executes
a specified statement until the condition returns false. The condition
is evaluated after executing the statement.*/
