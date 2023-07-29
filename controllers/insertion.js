const { docModal } = require("../Db/modals/docModal");
const { stringModal } = require("../Db/modals/stringModal");
const { io } = require("../socketWork");

const insertion = (socket)=>{
    try {
        
    
    socket.on("ins",async(q)=>{
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
    })
} catch (error) {
       console.log(error) 
}
}
module.exports = {insertion}