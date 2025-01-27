import React from 'react'
import './header.css'


import CV from '../../assets/cv.pdf'
import ahorasi from '../../assets/noback.png'
import { FaGithub, FaNodeJs } from 'react-icons/fa'
import { PiReadCvLogo } from "react-icons/pi";

import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { DiMongodb, DiReact } from 'react-icons/di'
import { SiJavascript, SiMicrosoftsqlserver, SiMongodb, SiTypescript } from 'react-icons/si'
const header = (props) => {

  return (
    <header>
      <div className="container header_container">
        <div className='container-flex'>
       
          <img className='me'  src={ahorasi} alt="me" />  
      
        <div className='container-flexTituSub'>
       
        <h3>Hola soy</h3>
        <h1>Sebastian Julon</h1>
        <div className='SpaceLinksNoTop'>
     
      
        <h1 className="text-light">FullStack Developer</h1>
        </div>
        <p className='MinufyText'>Con mas de 3 años de experiencia en proyectos de desarrollo de aplicaciones web con React, Javascript, TypeScript y Node JS.
          Todo nació de una semilla de impulso llamada creatividad, y por supuesto mi motivación a aprender me ha mantenido con muchas ganas de seguir innovando y hacer uso de las tecnologias de la información para dar valor e impacto a la comunidad.
        </p>
        <div className='SpaceLinks'>
        <a href="https://www.linkedin.com/in/sebastian-julon-chamana/" target="_blank"><BsLinkedin size={'3rem'}/></a>
        <a href="https://github.com" target="_blank"><FaGithub size={'3rem'}/></a>
        <div className='tooltip'>
        <a href="https://wa.me/51994244459" target="_blank"><BsWhatsapp size={'3rem'}/></a>
        <span className="tooltip-text">Comunicate conmigo por WhatsApp</span>
        </div>
        <div className='tooltip'>
          
        <a href={CV} target="_blank"><PiReadCvLogo size={'3rem'}/></a>
        <span className="tooltip-text">Descargar mi CV</span>
        </div>
        </div>

        </div>
       
        {/* <a href={CV} className='btn btn-primary' download>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contactame</a> */}
        
        </div>
        <div className='SpaceColDeChill'>
          
        <h3>Tecnologias</h3>
        <div className='SpaceRow'>
           <div className='wrapperTech'>

           React 
           <DiReact size={'3rem'}/>
           </div>
           <div className='wrapperTech'>
            TypeScript
           <SiTypescript size={'3rem'}/>
           </div>
           <div className='wrapperTech'>
            Javascript
           <SiJavascript size={'3rem'}/>
           </div>
           <div className='wrapperTech'>
            NodeJS
           <FaNodeJs size={'3rem'}/>
           </div>
           <div className='wrapperTech'>
            MongoDB
           <SiMongodb size={'3rem'}/>
           </div>
           <div className='wrapperTech'>
            SQL Server
           <SiMicrosoftsqlserver size={'3rem'}/>
           </div>
           <div className='attractiveVerMas'
           onClick={()=>{window.location.href='#abilities'}}
           >
            ...Ver mas
           </div>
        </div>
        </div>
        {/* <CTA/> */}
        {/* <HeaderSocials /> */}
       
        {/* <a href="#contact" className='scroll_down'>Bajar a contactos</a> */}
      </div>

    </header>
  )
}

export default header