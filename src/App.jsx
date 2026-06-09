import React, { createContext, useState, useEffect } from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import Timeline from './Components/timeline/timeline'
import Experience from './Components/experience/experience'
import Footer from './Components/footer/footer'

import PortFolio from './Components/portfolio/portfolio'
import Abilities from './Components/habilidadestecnicas/abilities'
export const AppContextPanel = createContext();
const App = () => {
  const [language, SetLaguange] = useState('es')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'emerald')

  useEffect(() => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div>
      <AppContextPanel.Provider
        value={{
          language, SetLaguange, theme, setTheme
        }}
      >
          <Header />
          <Timeline/>
          <Nav/>
          <Experience/>
          <Abilities/>
          <PortFolio/>
          <Footer/>
       </AppContextPanel.Provider>
    </div>
  )
}

export default App
