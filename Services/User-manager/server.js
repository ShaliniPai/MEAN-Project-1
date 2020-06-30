//Filename : server.js

const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
var routes = require("./routes/index");

//Establish DB Connection
InitiateMongoServer();

const app = express();

//Create PORT
const PORT = process.env.PORT || 4000 ;

//Middleware
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({message:"API Working"});
});

/**
 * Router Middleware
 * Router - /api/auth
 */
app.use('/api/auth',routes);

app.listen(PORT,(req,res)=>{
    console.log("Server started on Port - 4000")
})
