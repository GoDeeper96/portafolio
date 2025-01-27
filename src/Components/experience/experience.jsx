import React from 'react'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Experiencia adquirida</h5>
      <h2>Mi experiencia laboral</h2>
      <div className='experienceContainerJob'>
        <div className='SpaceRowAround'>
        <h2>Radar 365</h2>
        <h5 className="text-light">Mayo 2023 - Actualidad</h5>
        </div>
        <div className='gridSeparated'>
        <div>
        <h3 className="TextSubTititle">Funciones </h3>
 
        <p> •	Implementé y mantuve APIs en NodeJS para integrar aplicaciones móviles, web y otros servicios en la nube, asegurando el tráfico de más de 200 consultas por día.</p>
        <p> •	Desarrollé B2Bs empresariales para la gobernanza y distribucion segura de data  entre empresa a empresa y/o para más de 50 usuarios proveedores.</p>
        <p> • Realicé migraciones de aplicaciones de escritorio a web usando React, TypeScript y JavaScript, reduciendo costos y mejorando la accesibilidad y gestión para el área de promociones.</p>
        <p> • Me comuniqué con usuarios finales sobre como llevar a cabo mejoras en la interfaz de usuario.</p>
        <p> • Participe en la resolución de conflictos sobre obstáculos a la hora de integrar APIs en un entorno OnPremise.</p>
        <p> • Proporcioné soporte técnico y capacitación, incluyendo la creación de manuales de uso para APIs y aplicaciones web, asegurando una implementación efectiva de las tecnologías.</p>
        <p> • Utilicé JMeter para diseñar y ejecutar pruebas de paralelismo y concurrencia en las APIs, evaluando su desempeño bajo cargas intensas y garantizando un tiempo de respuesta inferior a 2s.</p>
        <p> • Gestioné instancias OnPremise en Windows Server y Linux asegurando la disponibilidad.</p>        
        <p> • rendimiento de consultas de agregación en entornos de Big Data usando ClickHouse y Redis reduciendo los tiempos de procesamiento de datos en un 80%.</p>
        
        </div>
       
        </div>
      </div>
   
    </section>
  )
}

export default Experience