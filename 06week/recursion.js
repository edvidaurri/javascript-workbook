// create an array
var numbers = [0, 1, 2, 3];

/* call reduce() on the array, passing a callback
that adds all the values together */
var result = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

// log the result
console.log(result);
// expected output: 6
