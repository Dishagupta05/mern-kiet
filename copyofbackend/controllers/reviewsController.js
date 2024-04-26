const reviewsModel = require('../models/reviewsModel.js');

const getAllreviews = async(req,res)=>{
    const data = await reviewsModel.find();
    console.log(req.url);
    res.json({
        status:'success',
        results:0,
        data:{
            reviews:data,
        }
    });
}

const addreviews = async(req,res)=>{
    try{
    const data = await reviewsModel.create(req.body);
    console.log(data);
    res.json({
        status:'success',
        results:0,
        data:{
            products:data,
        }
    })
}
catch(err){
    console.log(err);
    res.json({
        status:'fail',
        message:err.message,
    })
}
}

const replacereview = async(req,res)=>{
    try{
    const result = await reviewsModel.findOneAndReplace(req.params.id,req.body);
    console.log(result);
    res.json({
        status:'success',
        data:{
            products:result,
        }
    })
}
catch(err){
    console.log(err);
    res.json({
        status:'fail',
        message:err.message,
    })
    
}
}

const deletereview = async(req,res)=>{
    try{
    const result = await reviewsModel.findByIdAndDelete({_id:req.params._id});
    console.log(result);
    res.json({
        status:'success',
        data:{
            products:result,
        }
    })
}
catch(err){
    console.log(err);
    res.json({
        status:'fail',
        message:err.message,
    })
    
}
}

    


module.exports = {
    getAllreviews,
    addreviews,
    deletereview,
    replacereview,
}