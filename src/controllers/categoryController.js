const {createCategoryService, readCategoryService, updateCategoryService, deleteCategoryService} = require("../service/categoryService");


exports.createCategory = async (req,res)=>{

    let data = await createCategoryService(req);
    res.status(200).json({status:'success',data:data})

}


exports.readCategory = async (req,res)=>{

    let data = await readCategoryService();
    res.status(200).json({status:'success',data:data})

}



exports.updateCategory = async (req,res)=>{

    let data = await updateCategoryService(req);
    res.status(200).json({status:'success',data:data})

}


exports.deleteCategory = async (req,res)=>{

    let data = await deleteCategoryService(req);
    res.status(200).json({status:'success',data:data})

}