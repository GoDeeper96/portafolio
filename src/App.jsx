import React, { createContext, useState } from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import Experience from './Components/experience/experience'
import { useTranslation } from 'react-i18next';
import Footer from './Components/footer/footer'

import PortFolio from './Components/portfolio/portfolio'
import Abilities from './Components/habilidadestecnicas/abilities'
export const AppContextPanel = createContext();
const App = () => {
  const [language,SetLaguange] = useState('es')
  
  return (
    <div>
      <AppContextPanel.Provider
        value={{
          language,SetLaguange
        }}
      >
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
       </AppContextPanel.Provider>
    </div>
  )
}

export default App