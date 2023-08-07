import React from 'react'
import './home.css'
import add from '../images/add.png'
import Prevwork from './Prevwork'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='mn'>
        <div className="top">
            <h3>Start a new document</h3>
            <img src={add} className='add' alt="add" />
        </div>
        <div className="btm">
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>
            <Prevwork/>


        </div>

    </div>
  )
}

export default Home