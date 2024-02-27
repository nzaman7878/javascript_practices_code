// Asynchronous Iteration:

async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  }
  
  (async () => {
    for await (const value of generateSequence(1, 5)) {
      console.log(value);
    }
  })();
  