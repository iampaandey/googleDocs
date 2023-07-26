const { docModal } = require("../Db/modals/docModal");
const { stringModal } = require("../Db/modals/stringModal");
const { io } = require("../socketWork");

const updation=(socket)=>{
    socket.on("update",async(querry)=>{
        console.log(querry);
    let strId=querry.id;
    let nStr= await stringModal.findOne({id:strId});
    nStr.value=querry.str;
    await nStr.save();
     io.emit("cur",nStr);
    })
}
module.exports= {updation};