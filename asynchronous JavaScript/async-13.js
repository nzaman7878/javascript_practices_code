// Promises:

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved after 1 second');
    }, 1000);
  });
  
  myPromise.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error('Error:', error);
  });
  