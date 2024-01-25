// Import the MongoClient class
const { MongoClient } = require('mongodb');

// Define the connection URI
const uri = 'mongodb://localhost:27017/mydb';

// Create a new MongoClient
const client = new MongoClient(uri);

// Define an async function to connect to the database and insert documents
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("mydb").command({ ping: 1 });
    console.log("Connected successfully to the database");
    // Get the collection object
    const collection = client.db("mydb").collection("customers");
    // Insert a single document
    const result1 = await collection.insertOne({ name: "John", age: 25 });
    console.log(`Inserted document with _id: ${result1.insertedId}`);
    // Insert multiple documents
    const result2 = await collection.insertMany([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 35 }
    ]);
    console.log(`Inserted ${result2.insertedCount} documents`);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the function
run().catch(console.dir);
