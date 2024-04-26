const mongoose = require("mongoose");

const user = mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        // require:true,
        // unique:true
    },
    userEmail:{
        type:String,
        // require:true,
        // unique:true
    },
    userPassword:{
        type:String,
        require:true,
        unique:true
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now(),
    },
    isAdmin:{
        type:Boolean,
        // require:true,
        default:false

    },updatedAt:{
        type:String,
        require:true
    }
})

const userModel = mongoose.model("user",user);
module.exports = userModel;

