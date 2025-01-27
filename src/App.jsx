import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import Experience from './Components/experience/experience'

import Footer from './Components/footer/footer'

import PortFolio from './Components/portfolio/portfolio'
import Abilities from './Components/habilidadestecnicas/abilities'

const App = () => {

  return (
    <>
  
          <Header />
          <Nav/>
          <Experience/>
          <Abilities/>
          <PortFolio/>
          {/* <About/>
           */}
          {/* <Services/> */}
          {/* <Testimonials/> */}
          
          {/* <Contact/> */}
          <Footer/>
        
    </>
  )
}

export default App