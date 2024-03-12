/*
Question: Explain the concept of arrow functions in JavaScript and provide an example demonstrating their usage.

Answer:

Arrow functions are a concise way to write functions in JavaScript introduced in ES6 (ECMAScript 2015).
 They provide a shorter syntax compared to traditional function expressions and 
 do not bind their own this, arguments, super, or new.target. Arrow functions are especially 
 useful for writing small, inline functions and for preserving the lexical scope of this.

Example:

Let's create an example to demonstrate arrow functions by converting a traditional 
function expression into an arrow function.
*/

// Traditional function expression
const multiply = function(a, b) {
    return a * b;
  };
  
  // Arrow function equivalent
  const multiplyArrow = (a, b) => a * b;
  
  // Usage of the functions
  console.log('Result of multiply:', multiply(5, 3)); // Output: 15
  console.log('Result of multiplyArrow:', multiplyArrow(5, 3)); // Output: 15

  /*
  In this example:

We define a traditional function expression multiply that takes two parameters (a and b) and returns their product.

We define an arrow function multiplyArrow using the arrow syntax () =>, which has the same functionality as 
the multiply function.

The arrow function multiplyArrow is more concise and has an implicit return (no need for the return keyword) 
because it consists of a single expression. 

If there were multiple statements in the function body, 
we would need to use curly braces {} and explicitly return the result.

We use both functions multiply and multiplyArrow to multiply two numbers and log the results to the console.

Arrow functions provide a cleaner and more readable syntax for writing functions in JavaScript,
 especially for short, one-liner functions.

 They are commonly used in modern JavaScript codebases for their simplicity and concise syntax.
  */