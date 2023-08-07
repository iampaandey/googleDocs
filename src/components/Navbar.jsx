import React from 'react'
import logo from "../images/logo.png"
import './navbar.css'
import { BsSearch } from "react-icons/bs";
import profileImage from '../images/raghav.jpg'
const Navbar = () => {
    const handlefocus=()=>{
        const inputBox=document.getElementsByClassName("searchBox")[0];
        const searchDiv=document.getElementsByClassName("search-box")[0];
        inputBox.style.backgroundColor='white';
        searchDiv.style.boxShadow='1px 1px 3px 0px rgba(27, 26, 26, 0.648)';
        searchDiv.style.backgroundColor='white';
    }
  return (
    <>
     <div className="main-nav">
        <div className="icons">
        <img src={logo} alt="logo" className='logo' />
        <h2><span className='googleName'>Google </span><span className='docsname'>Docs</span></h2>
        </div>
        <div className="search-box">
        <BsSearch/>
        <input type="text" onFocus={handlefocus} placeholder='Search' className='searchBox' />
        </div>
        <img src={profileImage} alt="profileImage" className='profileImage' />

        </div> 
    </>
  )
}

export default Navbar
