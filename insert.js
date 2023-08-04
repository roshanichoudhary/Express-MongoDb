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
    
    // const response = await client.db('mydb').collection("customers").insertOne({id:1, customer_name:"Ashish"});
    
    // const response = await client.db('mydb').collection("customers").insertOne({address: "Park Lane 38"});

    // const response = await client.db('mydb').collection("users").insertOne({id: 1, name: 'John', favorite_product: 154});

    // const response = await client.db('mydb').collection("users").insertOne({id: 2, name: 'Peter', favorite_product: 154});

    // const response = await client.db('mydb').collection("users").insertOne({id: 3, name: 'Amy', favorite_product: 155});

    // const response = await client.db('mydb').collection("users").insertOne({id: 4, name: 'Hannah', favorite_product: ''});

    // const response = await client.db('mydb').collection("users").insertOne({id: 5, name: 'Michael', favorite_product: ''});

    // const response = await client.db('mydb').collection("products").insertOne({id: 154, name: 'Chocolate Heaven'});

    // const response = await client.db('mydb').collection("products").insertOne({id: 155, name: 'Tasty Lemons'});

    // const response = await client.db('mydb').collection("products").insertOne({id: 156, name: 'Vanilla Dreams'});

    const response = await client.db('mydb').collection("orders").insertOne({id: 1, product_id: 154, status: 1});


    console.log(response);
    console.log("Record Inserted!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

