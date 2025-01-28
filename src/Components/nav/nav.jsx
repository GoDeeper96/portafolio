import React, { useContext } from 'react'
import './nav.css'
import { AiFillProject, AiOutlineHome } from 'react-icons/ai'

import { useState } from 'react'
import { AppContextPanel } from '../../App'

const Nav = () => {
  const [acttiveNav, setActiveNav] = useState('#');
   const { language,SetLaguange  }  = useContext(AppContextPanel)
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
       {language==='es'?'Experiencia Laboral':'Work Experience'}
        </a>
       
        <a href="#abilities"
        onClick={()=>setActiveNav('#abilities')}
        className={acttiveNav==='#abilities'?'active':''}
      >    
      {language==='es'?'Habilidades tecnicas':'Technical Abilities'}
      </a>
      <a href="#portfolio"
        onClick={()=>setActiveNav('#portfolio')}
        className={acttiveNav==='#portfolio'?'active':''}
      >    
         {language==='es'?'Proyectos':'Projects'}  
      </a>
      <a 
        style={{cursor:'pointer'}}
        onClick={()=>{
          if(language==='es')
          {
            SetLaguange('en')
          }
          if(language==='en')
          {
            SetLaguange('es')
          }
         
        }}
        
      >    
         {language==='es'?'Cambiar idioma':'Change Language'}  
      </a>
      
    
     
      
    </nav>
   
  )
}

export default Nav