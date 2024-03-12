/* 
Question: Explain the concept of currying in JavaScript and provide an example demonstrating its usage.

Answer:

Currying is a functional programming technique in JavaScript that involves breaking
 down a function with multiple arguments into a series of single-argument functions.
  This allows you to partially apply arguments to a function, creating new functions
   with pre-filled arguments. Currying enables more flexible and composable code, 
   especially when working with higher-order functions.

Example:

Let's create an example to demonstrate currying using a function that calculates
 the area of a rectangle. We'll start with a function that takes three arguments
  (length, width, and height) and then convert it into a curried function.

*/

// Regular function to calculate the volume of a rectangular prism
function calculateVolume(length, width, height) {
    return length * width * height;
  }
  
  // Curried function to calculate the volume of a rectangular prism
  function curriedCalculateVolume(length) {
    return function(width) {
      return function(height) {
        return length * width * height;
      };
    };
  }
  
  // Usage of the regular function
  console.log('Volume of rectangular prism (Regular function):', calculateVolume(5, 3, 2)); // Output: 30
  
  // Usage of the curried function
  const curriedVolume = curriedCalculateVolume(5)(3)(2);
  console.log('Volume of rectangular prism (Curried function):', curriedVolume); // Output: 30

  
 /*
 In this example:

We start with a regular function calculateVolume that takes three arguments 
(length, width, and height) and returns their product.

We then define a curried function curriedCalculateVolume that takes a single argument
 (length) and returns a function that takes another argument (width).
 
  This inner function returns another function that takes the final argument (height),
   and finally, it calculates and returns the volume using the provided arguments.
When we use the regular function, we pass all arguments at once.

When we use the curried function, we pass each argument one by one,
 creating a chain of functions. The final function returns the volume using the provided arguments.

Currying allows for greater flexibility and composability,
 as you can create new functions by partially applying arguments
  to existing functions. This makes code more modular and easier to understand and maintain.
 */ 
