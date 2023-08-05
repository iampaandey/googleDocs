import {useEffect, useState} from "react"
import './App.css';
import {  io } from 'socket.io-client';
import { createPortal } from "react-dom";
import ReactQuill,{Quill} from 'react-quill'
import QuillToolBar, { modules, formats } from "./components/Quilltoolbar.js";
import "react-quill/dist/quill.snow.css";
import { BsPlus} from "react-icons/bs";
const skt = io('http://localhost:7000')



function App() {


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
      <div className="text-editor">
      <QuillToolBar />
      <div className="innerItems">
      <div className="leftoptions">
      <div className="btnsymbl"><h2>Summary</h2><BsPlus className="bsplus" onClick={handleinputarea}/> 
      </div> 
        <input type="hidden" name="summary" id="summarytext"   value={textvl} placeholder="Give Your Document A Summary" onChange={(e)=>{handleChangeText(e)}}
        />
      </div>
      <ReactQuill id="container"
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
      </div>
     
  );
}

export default App;
