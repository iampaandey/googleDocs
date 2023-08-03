const {docModal,io, stringModal, auth} = require("../imports")


const insertion = (socket)=>{
    try {
        
    
    socket.on("ins",async(q)=>{
        const user = auth(q.token);
        if(user !== null){
        console.log(q)
         const doc  = await docModal.findOne({_id:q.docid});
const str = new stringModal({value:q.str});

await str.save();
 const item = doc.item;
 item.push(str._id);
 doc.item = item;
 await doc.save();
 console.log(doc)
io.emit("cur",str);
}else{
    socket.emit("err","Unauthenticated");
  }   

    })
} catch (error) {
       console.log(error) 
}
}
module.exports = {insertion}