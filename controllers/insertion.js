const { docModal } = require("../Db/modals/docModal");
const { stringModal } = require("../Db/modals/stringModal");
const { io } = require("../socketWork");

const insertion = (socket)=>{
    socket.on("ins",async(q)=>{
        console.log(q)
         const doc  = await docModal.findOne({_id:q.docid});
         console.log(doc);
const str = new stringModal({value:q.str});

await str.save();
 const item = doc.item;
 item.push(str._id);
 doc.item = item;
 await doc.save();
console.log(str,doc)
io.emit("cur",str);
    })

}
module.exports = {insertion}