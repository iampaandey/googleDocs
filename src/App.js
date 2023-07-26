import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
import { createPortal } from "react-dom";
const skt = io('http://localhost:7000')


function App() {
  // const [idx, setIdx] = useState("")
  const [val, setVal] = useState("")

  const [mess,setMess] = useState("")
  useEffect(()=>{
    skt.on("connect",()=>{
      console.log("done")
    })          
  },[])
  



  skt.on("cur",(res)=>{
    console.log(res);
    setMess(res.value)
   })
 
 const handleSubmit = ()=>{ 
  // const qr ={
  //   idx:idx,
  //   str:mess, 
  // }
  // skt.emit('querry',qr)
  const q ={
    str:val
  }
  skt.emit("ins",q);
 }

 
  return (
    <div className="App">
      <h1>{mess}</h1>
     {/* <input type="text" onChange={(e)=>{setIdx(e.target.value)}} value={idx} className='inp'/> */}
     <input type="text" onChange={(e)=>{setVal(e.target.value)}} value={val} className='inp' />
     <button  onClick={handleSubmit} className='btn'>Submit</button>
    </div>
  );
}

export default App;
