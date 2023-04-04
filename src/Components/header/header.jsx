import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ahorasi from '../../assets/noback.png'
import HeaderSocials from './HeaderSocials'
const header = (props) => {

  return (
    <header>
      <div className="container header_container">

        <h5>Hola soy</h5>
        <h1>Sebastian Julon</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials />
        <div className="me">
          <img src={ahorasi} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default header