/*Question: Explain the concept of asynchronous JavaScript and provide an example demonstrating its usage with Promises and async/await.

Answer:

Asynchronous JavaScript allows you to perform operations without blocking the execution of the program. This is crucial for tasks like fetching data from a server, reading files, or handling user interactions, where the operation may take some time to complete.

Promises and async/await are two commonly used techniques for handling asynchronous code in JavaScript.

Example:

Let's consider an example where we fetch user data from an API asynchronously using Promises and async/await: */

// Function to fetch user data from an API (using Promises)
function fetchUserDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id: 1, username: 'john_doe', email: 'john@example.com' };
        resolve(userData);
      }, 2000); // Simulating an asynchronous delay of 2 seconds
    });
  }
  
  // Using Promises
  fetchUserDataPromise()
    .then(userData => {
      console.log('User data fetched successfully:', userData);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  
  // Function to fetch user data from an API (using async/await)
  async function fetchUserDataAsync() {
    try {
      const userData = await fetchUserDataPromise();
      console.log('User data fetched successfully:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Using async/await
  fetchUserDataAsync();

  
