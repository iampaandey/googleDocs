const server = require("http").createServer(app);
export const io = require("socket.io")(server,{
  cors:
  {
      origin:"*",
      methods:["GET", "POST"]
  },
  allowEIO3: true
});

server.listen(7000, ()=>{
    console.log("Running at port 7000")
})