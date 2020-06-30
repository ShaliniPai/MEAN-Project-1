//Filename : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{type:String,required:true},
    //sparse is because we have two possible unique ID's which are optional
   // userId :{type:String,lowercase:true,trim:true,unique:true},
    email:{type:String,lowercase:true,required:true
        // index:true,sparse:true,trim:true,
        // validate:[validate({
        //     validator:'isEmail',
        //     message:'Not a valid Email',
        // })]
    },
    password:{type:String,required:true},
    phone:{type:String,lowercase:true,required:true
        //index:true,sparse:true,trim:true,
        // validate:[validate({
        //     validator:'isNumeric',
        //     message:'Not a valid Phone number',
        // })]
    },
    role:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()}
});

//Combination of phone or email and userId to be unique
// UserSchema.index({email:1,userId:1},{unique:true});
// UserSchema.index({phone:1,userId:1},{unique:true});

//Export User Model with User Schema
module.exports = mongoose.model("user",UserSchema);