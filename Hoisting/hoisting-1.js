console.log(x); // Output: undefined
var x = 5;

// The above code behaves as if it were written like this:
// var x;
// console.log(x);
// x = 5;


// Explanation:

// Even though we try to log the value of x before it is declared and initialized, JavaScript does not throw an error. Instead, it logs undefined.
// This is because during the compilation phase, variable declarations (and function declarations) are moved to the top of their containing scope, but the assignments are not.
