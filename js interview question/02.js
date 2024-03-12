/* 

Question: Explain the concept of higher-order functions in JavaScript and provide an example demonstrating their usage.

Answer:

Higher-order functions are functions that can take other functions as arguments or return functions as their results. They enable a functional programming style in JavaScript, allowing for more flexible and reusable code.

Example:

Let's consider an example where we have a higher-order function called operateOnNumbers that takes two numbers and a callback function as arguments. The callback function is applied to the two numbers, and the result is returned by operateOnNumbers.


*/


// Higher-order function that takes two numbers and a callback function
function operateOnNumbers(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  // Callback function to add two numbers
  function add(a, b) {
    return a + b;
  }
  
  // Callback function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Using the higher-order function with the add callback
  const additionResult = operateOnNumbers(5, 3, add);
  console.log('Addition result:', additionResult); // Output: 8
  
  // Using the higher-order function with the multiply callback
  const multiplicationResult = operateOnNumbers(5, 3, multiply);
  console.log('Multiplication result:', multiplicationResult); // Output: 15
  




/* 



*/