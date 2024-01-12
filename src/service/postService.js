const postModel = require("../models/postModel");
const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId;
const createPostService = async (req)=>{
    try {
        let postBody = req.body;
        let data = await postModel.create(postBody);
        return  {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}


const readPostService = async ()=>{
    try {
        let query = {}
        let data = await postModel.find();
        return  {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

const updatePostService = async (req)=>{
    try {
        let postID = req.params.postID
        let postBody = req.body
        let query = {_id: postID}
        let data = await postModel.updateOne(query,postBody);
        return  {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

const deletePostService = async (req)=>{
    try {
        let postID = req.params.postID
        let query = {_id: postID}
        let data = await postModel.deleteOne(query);
        return  {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

const postByCategoryService = async (req)=>{
    try {
        let categoryID=new ObjectId(req.params.categoryID);

        let MatchStage={$match:{categoryID:categoryID}}
        let joinStage = {$lookup:{from:"categorises",localField:"categoryID",foreignField:"_id",as:"category"}}

        let UnwindCategoryStage={$unwind:"$category"}
        let projecting = {$project:{"categoryID":0,"_id":0,["category._id"]:0}}

        let data = await postModel.aggregate([
            MatchStage,
            joinStage,
            UnwindCategoryStage,
            projecting
        ])
        return  {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}


module.exports={
    createPostService,
    readPostService,
    updatePostService,
    deletePostService,
    postByCategoryService
}