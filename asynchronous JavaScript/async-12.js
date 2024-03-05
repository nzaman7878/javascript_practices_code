//Async/Await with Promises:

// Define a function that returns a Promise, resolving after a specified delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Define an asynchronous function using the async keyword
async function exampleAsync() {
  console.log('Start'); // Log a message indicating the start of the asynchronous operation

  // Wait for 1000 milliseconds (1 second) using the wait function and await keyword
  await wait(1000);

  console.log('End'); // Log a message indicating the end of the asynchronous operation
}

// Call the exampleAsync function
exampleAsync();



/* Explanation:

We define a function named wait that takes a time in milliseconds (ms) as an argument. It returns a Promise that resolves after the specified delay using setTimeout.
We define an asynchronous function named exampleAsync using the async keyword. This function will perform asynchronous operations.
Inside exampleAsync, we log a message "Start" to indicate the start of the asynchronous operation.
We use await wait(1000) to pause the execution of the function for 1000 milliseconds (1 second). The function will wait asynchronously for the specified time before moving to the next line.
After waiting for 1 second, we log a message "End" to indicate the end of the asynchronous operation.
Finally, we call the exampleAsync function, which initiates the asynchronous operation. */