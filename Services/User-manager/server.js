//Filename : server.js

const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("../Shared-modules/config/db");
var routes = require("./routes/index");
const cors = require('cors');

//Establish DB Connection
InitiateMongoServer();

const app = express();

//Create PORT
const PORT = process.env.PORT || 8888 ;

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({message:"API Working"});
});

/**
 * Router Middleware
 * Router - /api/auth
 */
app.use('/api/auth',routes);

app.listen(PORT,(req,res)=>{
    console.log("Server started on Port - 8888")
})
