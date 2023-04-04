import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [acttiveNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" 
        onClick={()=>setActiveNav('#')}
        className={acttiveNav==='#'?'active':''}>      
        <AiOutlineHome/></a>
      <a href="#about" 
         onClick={()=>setActiveNav('#about')}
         className={acttiveNav==='#about'?'active':''}
      ><AiOutlineUser/></a>
      <a href="#experience"
        onClick={()=>setActiveNav('#experience')}
        className={acttiveNav==='#experience'?'active':''}
      >        
        <BiBook/></a>
      <a href="#services"
        onClick={()=>setActiveNav('#services')}
        className={acttiveNav==='#services'?'active':''}
      >       
       <RiServiceLine/></a>
      <a href="#contact"
        onClick={()=>setActiveNav('#contact')}
        className={acttiveNav==='#contact'?'active':''}
      ><BiMessageSquareDetail/></a>
    </nav>
   
  )
}

export default Nav