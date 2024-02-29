// Error Handling with Async/Await:

async function readExampleFile() {
    try {
      const data = await readFilePromise('example.txt');
      console.log('File content:', data);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  }
  
  readExampleFile();
  