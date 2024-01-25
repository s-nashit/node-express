const { MongoClient } = require('mongodb');

// Define the connection URI
const uri = 'mongodb://localhost:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("mydb").command({ ping: 1 });
      console.log("Database created");
    } finally {
      // Close the connection
      await client.close();
    }
  }
  