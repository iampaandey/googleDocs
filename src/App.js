import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
import { createPortal } from "react-dom";
import ReactQuill,{Quill} from 'react-quill'
import QuillToolBar, { modules, formats } from "./components/Quilltoolbar.js";
import "react-quill/dist/quill.snow.css";
import { BsPlus} from "react-icons/bs";
import Home from "./components/Home";
// const skt = io('http://localhost:7000')



function App() {

// console.log(Object(QuillToolBar))
    const [state, setState] =useState({ value: null });
    const handleChange = value => {
      console.log(value);
      setState({ value });
    }
  
    const [textvl,setTextvl]=useState("")
    const handleChangeText=(e)=>{
      setTextvl(e.target.value)
    }
    const handleinputarea=()=>{
      const el=document.getElementById("summarytext");
      el.type="";
      el.focus()
    }
    return (
      <Home/>
     
  );
}

export default App;
