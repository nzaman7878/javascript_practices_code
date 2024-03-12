/*
Question: Explain the concept of the event loop in JavaScript and how it handles asynchronous operations. Provide an example demonstrating the event loop's behavior.

Answer:

The event loop is a crucial concept in JavaScript that allows the runtime environment (e.g., the browser or Node.js) to handle asynchronous operations efficiently. It continuously checks the call stack and the task queue, ensuring that tasks are executed in the correct order.

When an asynchronous operation (such as fetching data from an API or reading a file) is initiated, it is pushed to the callback queue once it completes. The event loop picks tasks from the callback queue and pushes them to the call stack for execution when the call stack is empty.

Example:

Let's consider an example where we use setTimeout to simulate an asynchronous operation. We'll also log messages to illustrate the event loop's behavior.

*/

console.log('Start');

setTimeout(() => {
  console.log('Asynchronous operation completed');
}, 2000);

console.log('End');

