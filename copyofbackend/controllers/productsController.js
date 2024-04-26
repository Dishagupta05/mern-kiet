const productModel = require('../models/productsModel');
const getAllProducts = async(req,res)=>{
    const {sort='price',page=1,pageSize = 3,fields="-info",...q} = req.query;
    
    console.log(q,sort);

    let query = productModel.find(q);
    query = query.sort(sort.split(",").join(" "));
    
    const skip = pageSize*(page-1);
    
    query = query.skip(skip).limit(pageSize);
    query = query.select((fields.split(',').join(' ')));
    const data = await query;

    const totalResults = await productModel.countDocuments();


    console.log(req.url);
    // const data = await productModel.find(q);
    // console.log(data);
    res.json({
        status:'success',
        results: data.length,
        totalResults:totalResults,
        pageSize:pageSize,
        page:page,
        data:{
            products:data,
        }
    })

}

const addProduct = async(req,res)=>{
    try{
    const data = await productModel.create(req.body);
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
const replaceProduct = async(req,res)=>{
    try{
    const result = await productModel.findOneAndReplace(req.params.id,req.body);
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

const deleteProduct = async(req,res)=>{
    try{
    const result = await productModel.findByIdAndDelete({_id:req.params._id});
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
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct,

}