import React, { useContext } from 'react'
import './header.css'


import CV from '../../assets/cv.pdf'
import CV_EN from '../../assets/cv-en.pdf'
import ahorasi from '../../assets/noback.png'
import { FaGithub, FaNodeJs } from 'react-icons/fa'
import { TiDocumentText } from "react-icons/ti";

import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { DiReact } from 'react-icons/di'
import { SiJavascript, SiMicrosoftsqlserver, SiSpring, SiTypescript } from 'react-icons/si'
import { AppContextPanel } from '../../App'

const Header = (props) => {
  const { language } = useContext(AppContextPanel)
  const cvFile = language === 'es' ? CV : CV_EN
  const cvName = language === 'es' ? 'CV_SebastianJulon_ES.pdf' : 'CV_SebastianJulon_EN.pdf'

  return (
    <div>
      <header>
        <div className="container header_container">
          <div className="hero__grid">

            <div className="hero__identity">
              <img className='me' src={ahorasi} alt="me" />
              <h1>Sebastian Julon</h1>
              <h2 className="hero__role text-light">FullStack Developer</h2>
              <div className='SpaceLinks'>
                <a href="https://www.linkedin.com/in/sebastian-julon-chamana/" target="_blank" rel="noreferrer"><BsLinkedin size={'2.2rem'} /></a>
                <a href="https://github.com/GoDeeper96" target="_blank" rel="noreferrer"><FaGithub size={'2.2rem'} /></a>
                <div className='tooltip'>
                  <a href="https://wa.me/51994244459" target="_blank" rel="noreferrer"><BsWhatsapp size={'2.2rem'} /></a>
                  <span className="tooltip-text">{language === 'es' ? `Comunicate conmigo por WhatsApp` : 'Chat with me'}</span>
                </div>
                <div className='tooltip'>
                  <a href={cvFile} download={cvName} rel="noreferrer">
                    <span className="cv-btn"><TiDocumentText size={'1.5rem'} />{language === 'es' ? 'CV ES' : 'CV EN'}</span>
                  </a>
                  <span className="tooltip-text">{language === 'es' ? 'Descargar mi CV' : 'Download my CV'}</span>
                </div>
              </div>
            </div>

            <div className="hero__about">
              <h5 className="hero__eyebrow">{language === 'es' ? 'Sobre mí' : 'About me'}</h5>
              <h3 className="hero__greeting">{language === 'es' ? 'Hola, soy Sebastian 👋' : `Hi, I'm Sebastian 👋`}</h3>
              <p className='hero__bio'>
                {language === 'es' ? `Comprometido con la creación de tecnologías innovadoras: más de 3 años diseñando, desarrollando y desplegando APIs, aplicaciones web, integraciones y sistemas ERP B2B/B2C en la nube.
            Todo nació de una semilla de impulso llamada creatividad, y mi motivación a aprender me ha mantenido con muchas ganas de seguir innovando, hoy enfocado en IA aplicada (LLMs, agentes y RAG) para dar valor real a la comunidad.` : `Committed to building innovative technology: over 3 years designing, developing and deploying APIs, web apps, integrations and B2B/B2C ERP systems in the cloud.
It all started with a seed of drive called creativity, and my motivation to keep learning has kept me eager to keep innovating — today focused on applied AI (LLMs, agents and RAG) to bring real value to the community.`}
              </p>

              <div className="hero__tech">
                <h4 className="hero__tech-title">{language === 'es' ? 'Tecnologías' : 'Technologies'}</h4>
                <div className='SpaceRow'>
                  <div className='wrapperTech'>
                    React
                    <DiReact size={'1.6rem'} />
                  </div>
                  <div className='wrapperTech'>
                    TypeScript
                    <SiTypescript size={'1.6rem'} />
                  </div>
                  <div className='wrapperTech'>
                    Javascript
                    <SiJavascript size={'1.6rem'} />
                  </div>
                  <div className='wrapperTech'>
                    NodeJS
                    <FaNodeJs size={'1.6rem'} />
                  </div>
                  <div className='wrapperTech'>
                    Spring
                    <SiSpring size={'1.6rem'} />
                  </div>
                  <div className='wrapperTech'>
                    SQL Server
                    <SiMicrosoftsqlserver size={'1.6rem'} />
                  </div>
                  <div className='attractiveVerMas'
                    onClick={() => { window.location.href = '#abilities' }}
                  >
                    {language === 'es' ? '...Ver mas' : 'See more'}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </header>
    </div>
  )
}

export default Header
