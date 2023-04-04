import React from 'react'
import CV from '../../assets/cv.pdf'
import { BsTranslate } from 'react-icons/bs'
import styled from 'styled-components'
import './header.css'
// const ButtonTranslate = styled.a`
//  color: white;
//  background-color: red;
// `
const CTA = (props) => {
  

  return (
    <div className='cta'>
        <a href={CV} className='btn btn-primary' download>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contactame</a>
        
        {/* <a  className='btn btn-secondary'>Translate to English <BsTranslate size={20}></BsTranslate></a> */}
        
    </div>
  )
}

export default CTA