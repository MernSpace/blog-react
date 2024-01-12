const {createPostDetailService, readPostDetailService, updatePostDetailService, deletePostDetailService} = require("../service/postDetailService");



exports.createPostDetail = async (req,res)=>{
    let data = await createPostDetailService(req);
    res.status(200).json({status:'success',data:data});
}

exports.readPostDetail = async (req,res)=>{
    let data = await readPostDetailService(req);
    res.status(200).json({status:'success',data:data});
}

exports.updatePostDetail = async (req,res)=>{
    let data = await updatePostDetailService(req);
    res.status(200).json({status:'success',data:data});
}

exports.deletePostDetail = async (req,res)=>{
    let data = await deletePostDetailService(req);
    res.status(200).json({status:'success',data:data});
}
