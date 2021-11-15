const express=require("express")
const cors=require("cors")
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app=express()
require('dotenv').config()
const port=process.env.PORT || 5000
app.use(cors())
app.use(express.json())
const uri=`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.xhxaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client=new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri)

async function run(){
    try{
        await client.connect()
        console.log("Connect database")
    }
    catch{

    }
}
run().catch(console.dir)


app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(port,(req,res)=>{
    console.log("ok your server work")
})