// Error Handling with Callbacks:

function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, data);
    });
  }
  
  readFile('example.txt', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
  });
  