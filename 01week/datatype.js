//1. Write a JavaScript program to display the current day and time.
//Javascript provides date and time functions, utilize javascript date and time functions: getDate() returns values 1-31,get.Month() returns values 0-6,getFullYear() returns values 1900+. Make method called getDay() assign it to new Date()
//Repeat method for time called getTime() using getHours(), getMinutes(),and getSeconds(). For minutes and seconds less that 10 run an if statement to place 0 in front of integer.

var getDay = new Date();
day = getDay.getDate();
month = getDay.getMonth() + 1;
year = getDay.getFullYear();
console.log(day + "-" + month + "-" + year);

var getTime = new Date(),
  hours = getTime.getHours(),
  minutes = getTime.getMinutes();
seconds = getTime.getSeconds();
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = '0' + seconds;
}
console.log(hours + ":" + minutes + ":" + seconds);


//2. Write a JavaScript program to convert a number to a string.
//Make a var that is assigned a number then make a var to wrap the number in a string, print to log.
var anumber = 1;
var astring = anumber + '';
console.log(astring);


//3. Write a JavaScript program to convert a string to the number.
//Use the parseInt() function which analyzes a string and returns an number.
var a = parseInt("10");
console.log(a);


//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean: This is conditional statement. Run an if statement to determine whether true or not
if (10 === 2) {
  console.log("This statement is true");
} else {
  console.log("This statement is false");
}

//Null: null is nothing set value of var to null and print var.
var a = null;
console.log(a);

//Undefined: Run typeof, set value of var to a undefined value and print var.
var b;
console.log(b);

//Number: Run typeof, assign value of var to a number and print var.
var num = 23;
console.log(num);

//NAN: assign a non number value to a var and print var.Or parseInt a string value to get NaN.
var notNum = 0 / 0;
console.log(notNum);

//String: Run typeof, assign a string value to a var and print var.
var string = "Eric";
console.log(string);


//5.Write a JavaScript program that adds 2 numbers together.
//Make 2 vars and assign a value to them. Make a third var that adds to two vars together.

var a, b, c;
a = 13;
b = 'Edward';
c = a + b;
console.log(a + ' ' + b);


//6. Write a JavaScript program that runs only when 2 things are true.
//This is conditional statement. Run an if statement to determine whether 2 things are true or not using &&.

if (true && false) {
  console.log("Run!");
} else {
  console.log("Don't run");
}

//6. Write a JavaScript program that runs only when 1 of 2 things are true.
//This is conditional statement. Run an if statement to determine if one of two things are true or not using ||

if (true || false) {
  console.log("Run!");
} else {
  console.log("Don't run");
}


//7.Write a JavaScript program that runs when both things are not true.
//This is conditional statement. Run an if statement to determine if two things are not true.

var x = 'apple';
var y = 2;
if (!x === y) {
  console.log('This is true!');
} else {
  console.log('This is not true!');
}
