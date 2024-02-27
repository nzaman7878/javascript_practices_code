const promise1 = Promise.resolve('Resolved Promise 1');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved Promise 2 after 2 seconds');
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
