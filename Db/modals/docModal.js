const mongoose = require("mongoose")
const docSchema = mongoose.Schema({
    name:String,
    item:[String]
})
const docModal = mongoose.model("doc",docSchema )
module.exports = {docModal}