import React from 'react'
import './nav.css'
import { AiFillProject, AiOutlineHome } from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
  const [acttiveNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" 
        onClick={()=>setActiveNav('#')}
        className={acttiveNav==='#'?'active':''}>      
        <AiOutlineHome/></a>

 
      <a href="#experience"
        onClick={()=>setActiveNav('#experience')}
        className={acttiveNav==='#experience'?'active':''}
      >        
       Experiencia Laboral 
        </a>
       
        <a href="#abilities"
        onClick={()=>setActiveNav('#abilities')}
        className={acttiveNav==='#services'?'active':''}
      >    
      Habilidades Tecnicas  
      </a>
      <a href="#portfolio"
        onClick={()=>setActiveNav('#portfolio')}
        className={acttiveNav==='#services'?'active':''}
      >    
      Proyectos  
      </a>
     
      
    
     
      
    </nav>
   
  )
}

export default Nav