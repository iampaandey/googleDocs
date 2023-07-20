import logo from './logo.svg';
import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
const skt = io('http://localhost:7000')


function App() {
  const [list,setList] = useState([])
  const [idx, setIdx] = useState("")
  const [mess,setMess] = useState("")
  useEffect(()=>{
    skt.on("connect",()=>{
      console.log("done")
    }) 
    // skt.on("msg",(msgS)=>{
    //   let data=[];
    //   if(localStorage.getItem("prev") !== null){
    //     console.log("aya mai")
    //    data = JSON.parse(localStorage.getItem("prev"))
    //   }
    //   const obj = [...list,...data,msgS]
    //   localStorage.setItem("prev",JSON.stringify(obj));
    //   console.log(obj)
    //   setList(obj)
    //    })
       
   
  },[])
  


  skt.on("cur",(str)=>{
    console.log(str)
    setMess(str)
   })
 const handleSubmit = ()=>{
  let i = Number(idx);
 setMess(mess.slice(0,i) + mess.slice(i+1, mess.length));

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
     {
      list && list.map((e)=>{
        return <h3 id={e}>{e}</h3>
      })
     }
    </div>
  );
}

export default App;
