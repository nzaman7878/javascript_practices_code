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
  
