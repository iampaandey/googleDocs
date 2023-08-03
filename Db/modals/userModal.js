const mongoose = require("mongoose")
const useSchema = mongoose.Schema({
    name:String, 
    email:String,
    password:String,
    docs:[String],
    imageUrl :String,
    googleId:String,
    token:String,

})
 const userModal = mongoose.model("user", useSchema);
module.exports={userModal}
