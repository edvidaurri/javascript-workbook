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
