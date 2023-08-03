const {docModal,io, userModal, auth} = require("../imports")

const createdocModal=(socket)=>{
    socket.on("creation",async(q)=>{
        const user = auth(q.token);
        if(user !== null){
        const ndoc=new docModal();
        await ndoc.save();
        console.log(ndoc);
        const userr = await userModal.findOne({email : user.email});
        var arr = userr.docs;
        arr.push(ndoc._id);
        userr.docs = arr;
        await userr.save()
        io.emit("sendDoc",ndoc);
        }else{
            socket.emit("err","Unauthenticated");
          }   
    })
}
module.exports={createdocModal};