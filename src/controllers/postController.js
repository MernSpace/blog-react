const {createPostService,postByCategoryService,readPostService,updatePostService,deletePostService} = require("../service/postService");

exports.createPost= async (req, res)=>{
    let data = await createPostService(req);
    res.status(200).json({status:'success',data:data})
}

exports.readPost= async (req, res)=>{
    let data = await readPostService();
    res.status(200).json({status:'success',data:data})
}

exports.updatePost= async (req, res)=>{
    let data = await updatePostService(req);
    res.status(200).json({status:'success',data:data})
}

exports.deletePost= async (req, res)=>{
    let data = await deletePostService(req);
    res.status(200).json({status:'success',data:data})
}

exports.postByCategory=async (req, res)=>{
    let data = await postByCategoryService(req);
    res.status(200).json({status:'success',data:data})
}