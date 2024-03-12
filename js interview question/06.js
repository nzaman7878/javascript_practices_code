/*
Question: Explain the concept of memoization in JavaScript and provide an example demonstrating its usage.

Answer:

Memoization is an optimization technique used in programming to cache the results of 
expensive function calls and return the cached result when the same inputs occur again. 
This helps improve the performance of the application by avoiding redundant calculations.

Example:

Let's create an example to demonstrate memoization using a 
Fibonacci function, which calculates the nth Fibonacci number. 
We'll implement the function both without memoization and with memoization to compare their performance.
 */

// Fibonacci function without memoization
function fibonacciWithoutMemoization(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciWithoutMemoization(n - 1) + fibonacciWithoutMemoization(n - 2);
  }
  
  // Fibonacci function with memoization
  function fibonacciWithMemoization() {
    const cache = {};
    return function fib(n) {
      if (n in cache) {
        return cache[n];
      }
      if (n <= 1) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    };
  }
  
  // Usage of Fibonacci function without memoization
  console.time('Fibonacci without memoization');
  console.log('Fibonacci number (without memoization):', fibonacciWithoutMemoization(40));
  console.timeEnd('Fibonacci without memoization');
  
  // Usage of Fibonacci function with memoization
  const fibonacciMemoized = fibonacciWithMemoization();
  console.time('Fibonacci with memoization');
  console.log('Fibonacci number (with memoization):', fibonacciMemoized(40));
  console.timeEnd('Fibonacci with memoization');
  