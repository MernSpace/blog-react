const categoryModel = require('../models/categoryModel')


const createCategoryService = async (req)=>{
    try{
        let postBody = req.body;
        let data = await categoryModel.create(postBody);
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
const readCategoryService = async ()=>{
    try{
        let data =await categoryModel.find();
        return {status:"success", data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
const updateCategoryService = async (req)=>{
    try{
        let postBody = req.body;
        let categoryID = req.params.categoryID
        let query ={_id:categoryID}
        let data = await categoryModel.updateOne(query,postBody);
        return {status:"success", data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
const deleteCategoryService = async (req)=>{
    try{
        let categoryID = req.params.categoryID
        let query ={_id:categoryID}
        let data =await categoryModel.deleteOne(query);
        return {status:"success", data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}


module.exports={createCategoryService,readCategoryService,updateCategoryService,deleteCategoryService}