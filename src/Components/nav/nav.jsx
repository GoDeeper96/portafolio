import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AppContextPanel } from '../../App'

const sectionIds = ['#', '#timeline', '#experience', '#abilities', '#portfolio']

const Nav = () => {
  const [acttiveNav, setActiveNav] = useState('#');
  const { language, SetLaguange, theme, setTheme } = useContext(AppContextPanel)

  const themes = [
    { id: 'default', color: '#0075eb' },
    { id: 'emerald', color: '#10b981' },
    { id: 'violet',  color: '#8b5cf6' },
    { id: 'amber',   color: '#f59e0b' },
  ]

  useEffect(() => {
    const sections = sectionIds
      .map((id) => (id === '#' ? document.querySelector('header') : document.querySelector(id)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target)
            if (index !== -1) setActiveNav(sectionIds[index])
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav>
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={acttiveNav === '#' ? 'active' : ''}>
        <AiOutlineHome /></a>

      <a href="#timeline"
        onClick={() => setActiveNav('#timeline')}
        className={acttiveNav === '#timeline' ? 'active' : ''}
      >
        {language === 'es' ? 'Trayectoria' : 'Journey'}
      </a>

      <a href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={acttiveNav === '#experience' ? 'active' : ''}
      >
        {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
      </a>

      <a href="#abilities"
        onClick={() => setActiveNav('#abilities')}
        className={acttiveNav === '#abilities' ? 'active' : ''}
      >
        {language === 'es' ? 'Habilidades tecnicas' : 'Technical Abilities'}
      </a>
      <a href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={acttiveNav === '#portfolio' ? 'active' : ''}
      >
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </a>
      <a
        style={{ cursor: 'pointer' }}
        onClick={() => SetLaguange(language === 'es' ? 'en' : 'es')}
      >
        {language === 'es' ? 'Cambiar idioma' : 'Change Language'}
      </a>

      <div className="theme-switcher">
        {themes.map(t => (
          <button
            key={t.id}
            className={`theme-dot${theme === t.id ? ' theme-dot--active' : ''}`}
            style={{ '--dot-color': t.color }}
            onClick={() => setTheme(t.id)}
            title={t.id.charAt(0).toUpperCase() + t.id.slice(1)}
          />
        ))}
      </div>

    </nav>

  )
}

export default Nav
