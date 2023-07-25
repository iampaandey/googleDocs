

import { io } from "../socketWork/initSocket";
io.on('connection', (socket) => {
     console.log(`id : ${socket.id} connected`);
     socket.on('disconnect', () => {
         console.log('user disconnected');
       });
       socket.emit("cur",str)
       //to delete something
       del(socket)


       
   });
 









   // Deletion

   const del = (socket)=>{
    socket.on("querry",(q)=>{
        let curStr = q.str;
        let idx = Number(q.idx);
        if(curStr[idx]===str[idx]){
          let ln = str.length
          str = str.slice(0,idx) + str.slice(idx+1, ln);
          io.emit("cur",str)  
        }
       
        else{
        var diff=curStr.length-str.length;
        idx-=diff;
        console.log(idx, diff);
        if(idx<=-1)io.emit("cur",str) 
        else{
        if(idx < str.length)
        {
                let ln = str.length
                str = str.slice(0,idx) + str.slice(idx+1, ln);
                io.emit("cur",str)     
        }
      }
        
        }      
      })
   }