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

  /*
  In this example:

We define a fibonacciWithoutMemoization function that calculates the nth Fibonacci number recursively without memoization.
We define a fibonacciWithMemoization function that returns a closure with memoization. Inside the closure,
 we maintain a cache object to store previously calculated Fibonacci numbers.
When calculating the Fibonacci number with memoization, we first check if the result is already cached. 
If it is, we return the cached result; otherwise, we calculate it recursively and store it in the cache for future use.
We compare the performance of both approaches by measuring the execution time using console.time() and console.timeEnd().
You'll notice that the Fibonacci function with memoization executes significantly faster for 
large values of n compared to the function without memoization.
 Memoization helps avoid redundant calculations by caching the results, resulting in improved performance.
  */
 