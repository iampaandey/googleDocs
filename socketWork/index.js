const app = require("express")()
const server = require("http").createServer(app);
const io = require("socket.io")(server,{
  cors:
  {
      origin:"*",
      methods:["GET", "POST"]
  },
  allowEIO3: true
});
const runServer=()=>{

server.listen(7000, ()=>{
    console.log("Running at port 7000")
})

}


module.exports = {io, runServer}