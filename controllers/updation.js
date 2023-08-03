const {io, stringModal, auth} = require("../imports")

const updation=(socket)=>{
    socket.on("update",async(querry)=>{
        const user = auth(q.token);
        if(user !== null){
        console.log(querry);
    let strId=querry.id;
    let nStr= await stringModal.findOne({id:strId});
    nStr.value=querry.str;
    await nStr.save();
     io.emit("cur",nStr);
    }else{
        socket.emit("err","Unauthenticated");
      }   
    })
    
}
module.exports= {updation};