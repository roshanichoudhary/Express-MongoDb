const express = require("express");
const bodyParser = require("body-parser");
const { createProduct } = require("./mongo");
// const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.json());

app.post("/products");

app.get("/products");

app.listen(3000);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://roshanishete07:nQ3MVOkFchMVDqGA@cluster0.uvmsrxs.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("hello").collection("users").insertOne({id: 1, name: 'John'});
   
    // const response = await client.db('mydb').createCollection("customers");
    // const response = await client.db('mydb').collection("customers").insertOne({id:1, customer_name:"Ashish"});

    // const response = await client.db('mydb').collection("customers").findOne({customer_name:"Asdhish"});

    

    // const response = await client.db('mydb').collection("customers").insertOne({address: "Park Lane 38"});

    // var myquery = { address: "Park Lane 38"};
    // var newvalues = { $set: {name: "Mickey", id: "2"} };
    // const response = await client.db('mydb').collection("customers").updateOne(myquery, newvalues);

    // var query = {address: "Park Lane 38"};
    // const response = await client.db('mydb').collection("customers").find(query).toArray();

    // var myquery = {id: 1};
    // var newvalues = { $set: {address: "Ark Lane 20"} };
    // const response = await client.db('mydb').collection("customers").updateOne(myquery, newvalues);

    // var mysort = { address : 1 };
    // const response = await client.db('mydb').collection("customers").find().sort(mysort).toArray();

    // var mysort = { address : -1 };
    // const response = await client.db('mydb').collection("customers").find().sort(mysort).toArray();

    
    const response = await client.db('mydb').collection("customers").find().limit(1).toArray();


    console.log(response);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

