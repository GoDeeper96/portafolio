import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> Sebastian Julon </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
   
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#abilities">Habilidades tecnicas</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
   
      </ul>
      <div className='footer__socials'>

      </div>
      <div>
        <small color='white'>&copy; Copyright. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default footer