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

    const response = await client.db('mydb').collection("customers").find().limit(1).toArray();

    console.log(response);
    console.log("limited record shown!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

