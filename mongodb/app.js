const { MongoClient } = require("mongodb");

uri = 'mongodb://localhost:27017/patnadb';

client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        await client.db("patnadb").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        await client.close();
}}

run().catch(console.dir);
//client.connect();