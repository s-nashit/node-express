const { MongoClient } = require("mongodb");

uri = 'mongodb://localhost:27017/patnadb';

client = new MongoClient(uri);

async function run(){
    try{
        await client.connect()
        await client.db("patnadb").command({ ping:1 })
        collection = client.db("patnadb").collection("students")
        result1 = await collection.insertOne({
            name:"nashit",
            mail :"nashit@hotrmail.com"
        })
        console.log('inserted succeesfully')
    }
    finally {await client.close()}
}

run().catch(console.dir)