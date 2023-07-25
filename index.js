// import express from "express"
// import cors from "cors"
const app=require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server,{
  cors:
  {
      origin:"*",
      methods:["GET", "POST"]
  },
  allowEIO3: true
});


// const app = express();
// app.use(cors())
var str = "Raghavpandeyvimalmishra"




io.on('connection', (socket) => {
   // socket.on("msg", (msg)=>{
      //   console.log(msg)
      //   socket.emit("msg",msg)
      // })
    console.log(`id : ${socket.id} connected`);
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
      socket.emit("cur",str)
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
  });



  server.listen(7000, ()=>{
    console.log("Running at port 7000")
})
// app.listen(8000, ()=>{
//     console.log("Running at port 8000")
// })