// HTTP Request with Callbacks:

const https = require('https');

https.get('https://api.example.com/data', (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (error) => {
  console.error('Error:', error);
});
