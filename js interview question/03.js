/* 
Question: Explain the concept of closures in JavaScript and provide an example demonstrating their usage.

Answer:

Closures are an essential concept in JavaScript that allows functions to retain access to variables from their lexical scope even after the outer function has finished executing. Closures are created whenever a function is defined within another function, allowing the inner function to access the outer function's variables.

Example:

Let's consider an example where we have a function called outerFunction that defines a variable counter and returns an inner function. The inner function, innerFunction, has access to the counter variable due to closure and increments it each time it's called.
*/

// Outer function that returns an inner function
function outerFunction() {
    let counter = 0;
  
    // Inner function that has access to the outer function's variables (closure)
    function innerFunction() {
      counter++;
      console.log('Counter value:', counter);
    }
  
    // Return the inner function
    return innerFunction;
  }
  
  // Create an instance of the inner function
  const incrementCounter = outerFunction();
  
  // Call the inner function multiple times
  incrementCounter(); // Output: Counter value: 1
  incrementCounter(); // Output: Counter value: 2
  incrementCounter(); // Output: Counter value: 3
  