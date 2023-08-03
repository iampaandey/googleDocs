const {userModal, express, app, cors,server,jwt} = require("../imports")
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

app.use(cors())
app.get("/",()=>{
  console.log("hello")
})
app.use(express.json({limit:"300mb" ,extended:true}))
app.use(express.urlencoded({limit:"300mb" ,extended:true}))
app.post("/register",async(req,res)=>{
        console.log(req.body)
        const user = await userModal.findOne({email:req.body.email})
        if(user === null)
        {
            const  nuser = new userModal(req.body);
            await nuser.save();
            res.status(200).json({message:"Registered Successfully"})
        }
        else{
            res.status(401).json({message:"Already Registered"})
        }
    
})
const KEY = "RaghavPandeyVimalMishraReactDevs";
app.post("/login",async(req, res)=>{
    const user = await userModal.findOne({email:req.body.email})
    if(user !== null)
    {
        if(req.body.password === user.password)
        {
            const token = jwt.sign(
                { user_id: user.email },
                KEY,
                {
                  expiresIn: "3d",
                }
              );
              user.token = token;
              await user.save();
              res.json({name:user.name,token:token});
        }
        else{
            res.status(400).json({message:"Wrong Credentials"})  
        }
    }
    else{
        res.status(409).json({message:"User Not Found"})
    }
})

}


module.exports = {io, runServer, app}