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

/*
In this example:

We log 'Start' to the console.
We initiate an asynchronous operation using setTimeout, which waits for 2000 milliseconds (2 seconds) before executing its callback function.
We log 'End' to the console.
After 2 seconds, the asynchronous operation completes, and its callback function ('Asynchronous operation completed') is pushed to the callback queue.
The event loop continuously checks the call stack. When it finds it empty, it picks tasks from the callback queue and pushes them to the call stack for execution.
Finally, the message 'Asynchronous operation completed' is logged to the console after 'End', demonstrating how the event loop handles asynchronous operations while keeping the call stack free for other tasks.
This example highlights the non-blocking nature of asynchronous operations in JavaScript and how the event loop ensures that they are handled efficiently.
 */