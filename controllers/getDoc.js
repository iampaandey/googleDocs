const { docModal } = require("../Db/modals/docModal");
const { io } = require("../socketWork");
const {stringModal}=require("../Db/modals/stringModal");
const getDoc=(socket)=>{
    socket.on("getDoc",async(querry)=>{
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
        io.emit("errormessage","Not Found")
       }
    })
}
module.exports={getDoc};