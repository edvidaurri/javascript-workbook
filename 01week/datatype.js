//1. Write a JavaScript program to display the current day and time.
//Javascript provides date and time functions, utilize
//javascript day and time functions: getDay() returns values of the name of
// the day of week. Make method called getDay() assign it to new Date()
//Repeat method for time called getTime() using getHours(), getMinutes()
//,and getSeconds(). For minutes and seconds less that 10 run an if
//statement to place 0 in front of integer.

function funName() {
  var today = new Date();
  var day = today.getDay();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Log day of week from dayList array
  console.log("Today is: " + dayList[day]);
}
funName();

function funtime() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  console.log(hours + ":" + minutes + ":" + seconds);
}
funtime();

//2. Write a JavaScript program to convert a number to a string.
//Make a var that is assigned a number then make a var to wrap the number in a string, print to log.
function numToString(anumber) {
  anumber.toString();
  return anumber;
}
console.log(numToString('12'));


//3. Write a JavaScript program to convert a string to the number.
//Use the parseInt() function which analyzes a string and returns an number.
function stringToNum(a) {
  return a = parseInt("10");
}
console.log(stringToNum());


//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean: typeof to determine whether true or not.
function dataBol() {
  let object = true;
  console.log(typeof object);
}
dataBol();

//Null: null is nothing set value of var to null and print var.
function dataNul() {
  let object = null;
  console.log(typeof object);
}
dataNul();

//Undefined: Run typeof, set value of var to a undefined value and print var.
function dataUnd() {
  let object;
  console.log(typeof object);
}
dataUnd();
//Number: Run typeof, assign value of var to a number and print var.
function dataNum() {
  let object = 23;
  console.log(typeof object);
}
dataNum();

//NAN: assign a non number value to a var and print var.Or parseInt a string value to get NaN.
function dataNan() {
  let object = 0 / 0;
  console.log(typeof object);
}
dataNan();
//String: Run typeof, assign a string value to a var and print var.
function dataStr() {
  let object = 'Eric';
  console.log(typeof object);
}
dataStr();

//5.Write a JavaScript program that adds 2 numbers together.
//Make 2 vars and assign a value to them. Make a third var that adds to two vars together.

function sum(a, b) {
  var c = a + b;
  return c;
}
console.log(sum(4, 4));


//6. Write a JavaScript program that runs only when 2 things are true.
//This is conditional statement. Run an if statement to determine whether 2 things are true or not using &&.

function ab(xy, yz) {
  if (xy === true && yz === true) {
    return "it is true";
  } else {
    return "it is false";
  }
}
console.log(ab(true, true));
//7. Write a JavaScript program that runs only when 1 of 2 things are true.
//This is conditional statement. Run an if statement to determine if one of two things are true or not using ||

function bc(xy, yz) {
  if (xy === true || yz === false) {
    return 'this is true';
  } else {
    return 'this is false';
  }
}
console.log(bc(false, false));


//8.Write a JavaScript program that runs when both things are not true.
//This is conditional statement. Run an if statement to determine if two things are not true.

function cd(xy, yz) {
  if (xy === false && yz === false) {
    return 'this is a true statement';

  } else {
    return 'this is a false statement';
  }
}
console.log(cd(true, true))
