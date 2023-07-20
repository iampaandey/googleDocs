import express from "express"
import cors from "cors"
import {Server} from "socket.io"
import { createServer } from 'http';

const httpServer = createServer();
const app = express();
app.use(cors())
var str = "Raghavpandeyvimalmishra"

const io = new Server(httpServer,{
    cors: {
        origin: "https://candid-syrniki-7bbc54.netlify.app/",
        methods: ["GET", "POST"]
      }
  })


io.on('connection', (socket) => {
    console.log(`id : ${socket.id} connected`);
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
      socket.emit("cur",str)
      socket.on("msg", (msg)=>{
        console.log(msg)
        socket.broadcast.emit("msg",msg)
      })
      socket.on("querry",(q)=>{
        let idx = Number(q.idx);
        let curStr = q.str;
        if(idx < str.length)
        {
            if(curStr[idx] == str[idx])
            {
                let ln = str.length
                str = str.slice(0,idx) + str.slice(idx+1, ln);
                socket.broadcast.emit("cur",str)
            }
        }
      })











  });



httpServer.listen(7000, ()=>{
    console.log("Running at port 7000")
})
app.listen(8000, ()=>{
    console.log("Running at port 8000")
})