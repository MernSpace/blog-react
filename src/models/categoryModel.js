const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    name:{type:String,unique:true},
},{versionKey:false})

const categoryModel = mongoose.model('categorise',dataSchema);
module.exports = categoryModel;