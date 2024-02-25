const fs = require('fs');

// Function to read a file asynchronously
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Asynchronous function to demonstrate reading a file
async function readExampleFile() {
  try {
    console.log("Start reading file...");
    const content = await readFileAsync('example.txt');
    console.log("File content:", content);
    console.log("File read successfully.");
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Call the asynchronous function to read the file
readExampleFile();
