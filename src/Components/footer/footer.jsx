import React, { useContext } from 'react'
import './footer.css'
import { AppContextPanel } from '../../App'

const Footer = () => {
  const { language,SetLaguange  }  = useContext(AppContextPanel)
  return (
    <footer>
      <a href='#' className='footer__logo'> Sebastian Julon </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
   
        <li><a href="#experience">{language==='es'?'Experiencia':'Experience'}</a></li>
        <li><a href="#abilities">{language==='es'?'Knowledge':'Habilidades Tecnicas'}</a></li>
        <li><a href="#portfolio">{language==='es'?'Projects':'Proyectos'}</a></li>
   
      </ul>
      <div className='footer__socials'>

      </div>
      <div>
        <small color='white'>&copy; Copyright. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer