/*
Question: Explain the concept of async/await in JavaScript and provide an example demonstrating their usage.

Answer:

Async/await is a modern JavaScript feature introduced in ES2017 that provides a syntactic sugar on top of promises,
 making asynchronous code look and behave more like synchronous code. It allows you to write asynchronous code in a sequential manner, improving code readability and maintainability.

Example:

Let's create an example to demonstrate async/await using the same function from the previous 
example that fetches data from an API asynchronously.
*/

// Function to fetch data asynchronously
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = [1, 2, 3, 4, 5];
        // Resolve the promise with the data
        resolve(data);
        // Reject the promise with an error (uncomment to simulate an error)
        // reject(new Error('Failed to fetch data'));
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Async function using async/await
  async function fetchDataAsync() {
    try {
      console.log('Fetching data...');
      const data = await fetchData(); // Wait for the promise to resolve
      console.log('Data fetched successfully:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Usage of the fetchDataAsync function
  fetchDataAsync();
/*
In this example:

We define a function fetchData that returns a promise, just like in the previous example.
We define an async function fetchDataAsync using the async keyword. Inside this function,
 we use the await keyword to pause the execution and wait for the promise returned by fetchData to resolve. 
This makes the asynchronous code appear sequential.
We use a try/catch block to handle any errors that may occur during the execution of the async function. 
If an error occurs, it is caught and logged to the console.
We call the fetchDataAsync function to initiate the asynchronous operation.
Async/await simplifies asynchronous code by eliminating the need for chaining .
then() and .catch() methods, resulting in cleaner and more readable code. 
It's widely used in modern JavaScript development for handling asynchronous tasks.
*/  