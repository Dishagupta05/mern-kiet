const userModel = require('../models/userModel');

const getAllUsers = async(req,res)=>{
    const data = await userModel.find();
    console.log(req.url);
    res.json({
        status:'success',
        results:0,
        data:{
            reviews:data,
        }
    });
}

const addUsers = async(req,res)=>{
    try{
    const data = await userModel.create(req.body);
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

const updateUsers = async(req,res)=>{
    try{
    const result = await userModel.findOneAndReplace(req.params.id,req.body);
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

const deleteUsers = async(req,res)=>{
    try{
    const result = await userModel.findByIdAndDelete({_id:req.params._id});
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
    getAllUsers,
    addUsers,
    updateUsers,
    deleteUsers
}
