const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    title:{type:String},
    img:{type:String},
    categoryID:{type:mongoose.Schema.Types.ObjectId,require:true},
},{versionKey:false,timeStamp:true})


const postModel = mongoose.model('posts',dataSchema);
module.exports = postModel;
