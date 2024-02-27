// Database Operation with Callbacks (using Node.js with MongoDB):

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Connected to database');
  const db = client.db('mydb');
  db.collection('mycollection').find({}).toArray((err, result) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log('Result:', result);
    client.close();
  });
});
