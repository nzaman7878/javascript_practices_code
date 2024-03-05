// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    // Resolve the Promise after 1 second
    resolve('Promise resolved after 1 second');
  }, 1000);
});

// Handle the resolved value using the `then` method
myPromise.then((result) => {
  // Log the resolved value
  console.log(result);
}).catch((error) => {
  // Handle any errors that occur during the Promise execution
  console.error('Error:', error);
});


/* We create a Promise named myPromise using the new Promise() constructor. Inside the constructor, we define an asynchronous operation using setTimeout. This operation resolves the Promise after 1 second.
We use the then() method to handle the resolved value when the Promise is fulfilled. In this case, we simply log the resolved value to the console.
We use the catch() method to handle any errors that may occur during the execution of the Promise. If an error occurs, it will be caught here, and we log an error message to the console.*/