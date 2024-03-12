/*
Question: Explain the concept of promises in JavaScript and provide an example demonstrating their usage.

Answer:

Promises are objects representing the eventual completion or failure of an asynchronous operation. 
They allow you to write asynchronous code in a more synchronous-looking style, 
making it easier to handle asynchronous operations.

Example:

Let's create an example to demonstrate promises using a function that simulates fetching data from an API asynchronously.

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
  
  // Usage of the fetchData function with promises
  console.log('Fetching data...');
  fetchData()
    .then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  