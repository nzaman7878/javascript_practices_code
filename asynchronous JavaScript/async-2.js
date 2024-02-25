// Function that returns a promise which resolves after a delay
function delayedPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise resolved after ${delay} milliseconds`);
      }, delay);
    });
  }
  
  // Asynchronous function using async/await
  async function myAsyncFunction() {
    console.log("Start of async function");
    
    // Asynchronous operation: waiting for the delayed promise to resolve
    const result = await delayedPromise(2000);
    console.log(result);
    
    console.log("End of async function");
  }
  
  // Call the asynchronous function
  myAsyncFunction();
  