
const { io } = require("../socketWork");
const { del } = require("./deletion");
const { createdocModal } = require("./docCreation");
const { insertion } = require("./insertion");
const { updation } = require("./updation");
const runSocket=()=>{
io.on('connection', (socket) => {
     console.log(`id : ${socket.id} connected`);
     socket.on('disconnect', () => {
         console.log('user disconnected');
       });
    //    socket.emit("cur",str)
       //to delete something
       createdocModal(socket);
       del(socket);
       insertion(socket);
       updation(socket);
   });
}



module.exports={runSocket}






 