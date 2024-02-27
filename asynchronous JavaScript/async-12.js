//Async/Await with Promises:

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function exampleAsync() {
    console.log('Start');
    await wait(1000);
    console.log('End');
  }
  
  exampleAsync();
  