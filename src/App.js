import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
const skt = io('https://googledocs-h8x5.onrender.com')


function App() {
  const [idx, setIdx] = useState("")
  const [mess,setMess] = useState("")
  useEffect(()=>{
    skt.on("connect",()=>{
      console.log("done")
    })          
  },[])
  



  skt.on("cur",(str)=>{
    console.log(str);
    setMess(str)
   })
 
 const handleSubmit = ()=>{ 
  const qr ={
    idx:idx,
    str:mess, 
  }
  skt.emit('querry',qr)
 }
//  const submitQ =()=>{
//   console.log(qry)
//   skt.emit("querry", qry)
//  }
 
  return (
    <div className="App">
      <h1>{mess}</h1>
     <input type="text" onChange={(e)=>{setIdx(e.target.value)}} value={idx} className='inp'/>
     <button  onClick={handleSubmit} className='btn'>Submit</button>
    </div>
  );
}

export default App;
