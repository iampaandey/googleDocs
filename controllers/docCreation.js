const { docModal } = require("../Db/modals/docModal");
const { io } = require("../socketWork");

const createdocModal=(socket)=>{
    socket.on("creation",async()=>{
        const ndoc=new docModal();
        await ndoc.save();
        console.log(ndoc);
        io.emit("sendDoc",ndoc);
    })
}
module.exports={createdocModal};