import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
import { createPortal } from "react-dom";
const skt = io('http://localhost:7000')


function App() {
  // const [idx, setIdx] = useState("")
  const [val, setVal] = useState("")
  const [string,setString]=useState("");
  const [mess,setMess] = useState("");
  const [id,setId]=useState("");
  const [docid,setDocid]=useState("");
  const [flag,setFlag]=useState(false);

  useEffect(()=>{
    skt.on("connect",()=>{
      console.log("done")
    })          
  },[])
  
  


  // skt.on("cur",(res)=>{
  //   console.log(res);
  //   setMess(res.value)
  //   setId(res._id)
  //  })
  skt.on("sendDoc",(res)=>{
   setDocid(res._id);
   setFlag(true);
  })
 
 const handleSubmit = (vall)=>{ 
  // const qr ={
  //   idx:idx,
  //   str:mess, 
  // }
  // skt.emit('querry',qr)
  const q ={
    str:vall,
    docid:docid
  }
  skt.emit("ins",q);
 }
const handleEdit=()=>{
setString(mess);
}
 const handleUpdate=()=>{
  const querry={
    str:string,
    strId:id

  }
   skt.emit("update",querry);
 }
 
 const handleCreate=()=>{
   skt.emit("creation");
 }
 const handlenString=()=>{
    if(string.length)
    handleSubmit(string);
    setString("");
 }
  return (
    <div className="App">
      <h1>{docid}</h1>
      

     <button type="submit" className="btn"
     onClick={handleCreate}
     >Create New Modal </button>
      {flag===true ?<textarea name="" id="" cols="30" rows="10"
     onKeyUp={(e)=>{ if (e.key === " " ||
     e.code === "Space"     
 ) { 
     handlenString();
 
 }}} 
 onChange={(e)=>{setString((e.target.value))}}

    ></textarea> : "" }
    </div>
  );
}

export default App;
