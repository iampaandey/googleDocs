
const { io } = require("../socketWork");
const { del } = require("./deletion");
const { insertion } = require("./insertion");
const runSocket=()=>{
io.on('connection', (socket) => {
     console.log(`id : ${socket.id} connected`);
     socket.on('disconnect', () => {
         console.log('user disconnected');
       });
    //    socket.emit("cur",str)
       //to delete something
       del(socket);
       insertion(socket)
   });
}



module.exports={runSocket}






 