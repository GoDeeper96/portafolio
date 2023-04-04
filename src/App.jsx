import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import Experience from './Components/experience/experience'
import Services from './Components/services/services'
import Testimonials from './Components/testimonial/testimonials'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'
import About from './Components/about/about'
import PortFolio from './Components/portfolio/portfolio'

const App = () => {

  return (
    <>
  
          <Header />
          <Nav/>
          <About/>
          <Experience/>
          {/* <Services/> */}
          {/* <Testimonials/> */}
          <PortFolio/>
          <Contact/>
          <Footer/>
        
    </>
  )
}

export default App