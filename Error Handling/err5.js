// Handling Asynchronous Errors with Promises:

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation that fails
      setTimeout(() => {
        reject(new Error('Failed to fetch data'));
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error.message));
  