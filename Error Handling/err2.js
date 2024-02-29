// Error Handling with Promises:

function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  }
  
  readFilePromise('example.txt')
    .then((data) => {
      console.log('File content:', data);
    })
    .catch((err) => {
      console.error('Error reading file:', err);
    });
  