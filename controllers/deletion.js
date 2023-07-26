const { stringModal } = require("../Db/modals/stringModal");
const { io } = require("../socketWork");

const del = (socket)=>{
    socket.on("del",(q)=>{
        const str = stringModal.findOne({_id : q._id})
        let curStr = q.str;
        let idx = Number(q.idx);
        if(curStr[idx]===str[idx]){
          let ln = str.length
          let nstr = str.slice(0,idx) + str.slice(idx+1, ln);
          io.emit("cur",nstr)  
          str = nstr;
          str.save()
        }
       
        else{
        var diff=curStr.length-str.length;
        idx-=diff;
        if(idx<=-1)io.emit("cur",str) 
        else{
        if(idx < str.length)
        {
                let ln = str.length
                let nstr = str.slice(0,idx) + str.slice(idx+1, ln);
                io.emit("cur",nstr) 
                str = nstr;
                str.save()    
        }
      }
        
        }      
      })
   }
   module.exports = {del};