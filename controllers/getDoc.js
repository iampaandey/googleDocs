const {docModal,io, stringModal, auth} = require("../imports")
const getDoc=(socket)=>{
    socket.on("getDoc",async(querry)=>{
        const user = auth(querry.token);
        if(user !== null){
       const id=querry.docid;
       const ndoc=await docModal.findOne({_id:id});
       if(ndoc){
        var arr=[];
         Promise.all( ndoc.item.map(async(e)=>{
            var nstr=await stringModal.findOne({_id:e});
            return nstr;
         })).then((nstr)=>{
             arr.push(nstr);
            const obj={
                docname:ndoc.name,
                response:arr
            }
            console.log(obj);
            io.emit("docresult",obj); 
        })
          
            
                  
       }
       else{
        io.emit("err","Not Found")
       }
    }else{
        socket.emit("err","Unauthenticated");
      }   
    })
}
module.exports={getDoc};