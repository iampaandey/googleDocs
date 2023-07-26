const mongoose = require("mongoose")
const stringSchema = mongoose.Schema({
    value:String,
    fontSize:String,
    color:String,
    type:String,
    fontFamily:String,
    cap:[Number],
})
const stringModal = mongoose.model("string",stringSchema);
module.exports ={stringModal}