import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
import { createPortal } from "react-dom";
const skt = io('http://localhost:7000')


function App() {
  // const [idx, setIdx] = useState("")
  const [val, setVal] = useState("")
  const [string,setString]=useState("");
  const [str,setStr]=useState("");

  const [mess,setMess] = useState("");
  const [id,setId]=useState("");

  const [docid,setDocid]=useState("");
  const [flag,setFlag]=useState(true);
  const [ti, setTi] = useState(0);

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
  // const q ={
  //   // str:vall,
  //   docid:docid
  // }
  // skt.emit("ins",q);
  const querry={
    docid:docid,
    token:localStorage.getItem("token")
  }
  skt.emit("getDoc",querry)
 }
 skt.on("docresult",(obj)=>{
   let str="";
   obj.response[0].map((e)=>{
     str+=e.value;
     str+=" ";
   })
   setVal(str);
 })
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
    // handleSubmit(string);
    setString("");
 }
 const handleSet=(e)=>{
  const val = e.target.value;
  // console.log(val)
  let idx = ti;
  let s = "";
  while(idx < val.length)
  {
    if(val[idx] != " "){
    s += val[idx];
    }
    else{
      console.log(s)
      if(s.length){
      handleSubmit(s);
      setString(s)
      }
      setTi(idx);
    }
    idx++;
  }
  setStr(s)
  
  
 }
 const handleChange =()=>{
  console.log(str,string)
  if(str !== string && str.length && str!==" ")
  {
    console.log(str)
  handleSubmit(str);
  setString(str)
  }
 }
 
  return (
    <div className="App">
      <h1>{docid}</h1>
      

     {/* <button type="submit" className="btn"
     
     onClick={handleCreate}
     >Create New Modal</button> */}
      <input type="text" value={docid} 
      onChange={(e)=>{setDocid(e.target.value)}}
      />
      {flag===true ?<textarea name="" id="" cols="30" rows="10"
      value={val}
//  onChange={(e)=>{handleSet(e)}}
//  onPointerOut={handleChange}

    ></textarea> : "" }
    <button type="button"
    onClick={handleSubmit}
     >submit</button>
    </div>
  );
}

export default App;
