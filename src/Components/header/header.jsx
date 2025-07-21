import React, { createContext, useContext } from 'react'
import './header.css'


import CV from '../../assets/cv.pdf'
import ahorasi from '../../assets/noback.png'
import { FaGithub, FaNodeJs } from 'react-icons/fa'
// import { PiReadCvLogo } from "react-icons/pi";
import Flag from 'react-world-flags'
import { TiDocumentText } from "react-icons/ti";

import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { DiMongodb, DiReact } from 'react-icons/di'
import { SiJavascript, SiMicrosoftsqlserver, SiMongodb, SiSpring, SiTypescript } from 'react-icons/si'
import { AppContextPanel } from '../../App'

const Header = (props) => {
  const { language,SetLaguange  }  = useContext(AppContextPanel)
  return (
    <div>
      <div className='SpaceFlags'>
    
      <img
      onClick={()=>{SetLaguange('en')}}
      className='flagButton'
        src="https://flagcdn.com/w320/us.png"
        alt="United States"
        style={{ width: 50 }}
      />
    

       <img
         onClick={()=>{SetLaguange('es')}}
        className='flagButton'
        src="https://flagcdn.com/w320/es.png"
        alt="Espain"
        style={{ width: 50 }}
      />
   
      </div>
    <header>
      <div className="container header_container">
        <div className='container-flex'>
       
          <img className='me'  src={ahorasi} alt="me" />  
      
        <div className='container-flexTituSub'>
       
        <h3>{language==='es'?'Hola soy':`Hello I'm`}</h3>
        <h1>Sebastian Julon</h1>
        <div className='SpaceLinksNoTop'>
     
      
        <h1 className="text-light">FullStack Developer</h1>
        </div>
        <p className='MinufyText'>
          {language==='es'?`Con mas de 3 años de experiencia en proyectos de desarrollo de aplicaciones web con React, Javascript, TypeScript y Node JS.
          Todo nació de una semilla de impulso llamada creatividad, y por supuesto mi motivación a aprender me ha mantenido con muchas ganas de seguir
           innovando y hacer uso de las tecnologias de la información para dar valor e impacto a la comunidad.`:`With over 3 years of experience in web application development projects using React, JavaScript, TypeScript, and Node.js.
It all started with a seed of drive called creativity, and, of course, my motivation to learn has kept me eager to continue innovating and leveraging information technologies to bring value and impact to the community.`}
          
        </p>
        <div className='SpaceLinks'>
        <a href="https://www.linkedin.com/in/sebastian-julon-chamana/" target="_blank"><BsLinkedin size={'3rem'}/></a>
        <a href="https://github.com/GoDeeper96" target="_blank"><FaGithub size={'3rem'}/></a>
        <div className='tooltip'>
        <a href="https://wa.me/51994244459" target="_blank"><BsWhatsapp size={'3rem'}/></a>
        <span className="tooltip-text">{language==='es'?`Comunicate conmigo por WhatsApp`:'Chat with me'}</span>
        </div>
        <div className='tooltip'>
          
        <a href={CV} target="_blank"><TiDocumentText size={'3rem'}/></a>
        <span className="tooltip-text">{language==='es'?'Descargar mi CV':'Download my CV'}</span>
        </div>
        </div>

        </div>
       
        {/* <a href={CV} className='btn btn-primary' download>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contactame</a> */}
        
        </div>
        <div className='SpaceColDeChill'>
          
        <h3>{language==='es'?'Tecnologias':'Technologies'}</h3>
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
            Spring
           <SiSpring size={'3rem'}/>
           </div>
           <div className='wrapperTech'>
            SQL Server
           <SiMicrosoftsqlserver size={'3rem'}/>
           </div>
           <div className='attractiveVerMas'
           onClick={()=>{window.location.href='#abilities'}}
           >
            {language==='es'?'...Ver mas':'See more'}
           </div>
        </div>
        </div>
        {/* <CTA/> */}
        {/* <HeaderSocials /> */}
       
        {/* <a href="#contact" className='scroll_down'>Bajar a contactos</a> */}
      </div>

    </header>
    </div>
  )
}

export default Header