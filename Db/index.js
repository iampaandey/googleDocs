
const connectToDB=()=>{
const mongoose = require("mongoose")
const uri = 'mongodb+srv://skk180509:P5U7qIYIoIqS62At@cluster0.7yxbz83.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri).then(()=>{
    console.log("Connected to database")
}).catch((err)=>{console.log(err)})
}
module.exports = {connectToDB}