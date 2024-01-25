// Import the MongoClient class
const { MongoClient } = require('mongodb');

// Define the connection URI
const uri = 'mongodb://localhost:27017/mydb';

// Create a new MongoClient
const client = new MongoClient(uri);

// Define an async function to connect to the database
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("mydb").command({ ping: 1 });
    console.log("Connected successfully to the database");
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the function
run().catch(console.dir);
