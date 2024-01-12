const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    img1:{type:String},
    img2:{type:String},
    img3:{type:String},
    img4:{type:String},
    description:{type:String},
    postID :{type:mongoose.Schema.Types.ObjectId,require:true}
},{versionKey:false});


const postDetailModel = mongoose.model('postdetails',dataSchema);
module.exports = postDetailModel;