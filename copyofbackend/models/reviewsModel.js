const mongooes = require("mongoose");

const reviewsSchema = mongooes.Schema({
    productId:{
        type:String,
        // unique:true,
        // required:true
    },
    rating:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        // unique:true,
        // required:true
    },
    comment:{
        type:String
    },
    updateDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    reviewsDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    image:{
        type:[String],
    }

});

const reviewsModel = mongooes.model('reviwes',reviewsSchema)

module.exports= reviewsModel;