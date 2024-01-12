const postDetailModel = require('../models/postDetailModel')
const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId;


const createPostDetailService = async (req)=>{
    try {
        let postBody = req.body;
        let data = await postDetailModel.create(postBody);
        return ({status:"success",data:data});
    }
    catch (e) {
        return ({status:"fail",data:e}).toString();
    }
}

const readPostDetailService = async (req)=>{
    try {
        let postID =new ObjectId(req.params.postID);
        let Match = {$match:{postID:postID}}
        let joinStage = {$lookup:{from:'posts',localField:"postID",foreignField:"_id",as: "post"}}
        let data = await postDetailModel.aggregate([
            Match,
            joinStage
        ])
        return ({status:"success",data:data})
    }
    catch (e) {
        return ({status:"fail",data:e}).toString()
    }
}

const deletePostDetailService = async (req)=>{
    try{
        let postID = req.params.postID;
        let query = {_id:postID}
        let data = await postDetailModel.deleteOne(query)
         return ({status:"success",data:data})
    }
    catch (e) {
        return ({status:"fail",data:e}).toString()
    }
}

const updatePostDetailService = async (req)=>{
    try {
        let postID = req.params.postID;
        let postBody = req.body;
        let query = {_id:postID}
        let data = await postDetailModel.updateOne(query,postBody)
        return ({status:"success",data:data})
    }
    catch (e) {
        return ({status:"fail",data:e}).toString()
    }
}
module.exports ={ createPostDetailService,readPostDetailService,updatePostDetailService,deletePostDetailService}