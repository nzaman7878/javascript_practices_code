// This is a promise
const myPromise = new Promise((resolve, reject) => {
  // This code will be executed after 1 second
  setTimeout(() => {
    resolve("Hello, world!");
  }, 1000);
});

// This is an asynchronous function
async function myFunction() {
  // This code will be executed first
  console.log("Start");

  // This code will be executed after the promise is resolved
  const result = await myPromise;
  console.log(result);

  // This code will be executed last
  console.log("End");
}

// Call the asynchronous function
myFunction();