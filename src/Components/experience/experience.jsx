import React, { useContext } from 'react'
import './experience.css'
import { AppContextPanel } from '../../App'
const Experience = () => {
     const { language,SetLaguange  }  = useContext(AppContextPanel)
  return (
    <section id='experience'>
      <h5>{language==='es'?'Experiencia adquirida':'Experience'}</h5>
      <h2>{language==='es'?'Mi experiencia':'My Work Experience'}</h2>
      <div className='experienceContainerJob'>
        <div className='SpaceRowAround'>
        <h2>Radar 365</h2>
        <h5 className="text-light">{language==='es'?'Mayo.2023 - Actualidad':'May.2023 - Now'}</h5>
        </div>
        <div className='gridSeparated'>
        <div>
        <h3 className="TextSubTititle">{language==='es'?'Funciones':`What I've done`} </h3>
 
        <p> •	{language==='es'?'Implementé y mantuve APIs en NodeJS para integrar aplicaciones móviles, web y otros servicios en la nube, asegurando el tráfico de más de 200 consultas por día.':`I implemented and maintained APIs in Node.js to integrate mobile applications, web platforms, and other cloud services, ensuring the handling of over 200 requests per day.`}</p>
        <p> •	{language==='es'?'Desarrollé B2Bs empresariales para la gobernanza y distribucion segura de data  entre empresa a empresa y/o para más de 50 usuarios proveedores.':'I developed enterprise B2B solutions for secure data governance and distribution between businesses and/or for over 50 supplier users.'}</p>
        <p> • {language==='es'?'Realicé migraciones de aplicaciones de escritorio a web usando React, TypeScript y JavaScript, reduciendo costos y mejorando la accesibilidad y gestión para el área de promociones. ':' I carried out migrations from desktop applications to web platforms using React, TypeScript, and JavaScript, reducing costs while improving accessibility and management for the promotions department.'}</p>
        <p> • {language==='es'?'Me comuniqué con usuarios finales sobre como llevar a cabo mejoras en la interfaz de usuario.':'I collaborated with end users to implement improvements in the user interface.'}</p>
        <p> • {language==='es'?'Participe en la resolución de conflictos sobre obstáculos a la hora de integrar APIs en un entorno OnPremise.':'I participated in resolving challenges and obstacles during API integration in an On-Premise environment.'}</p>
        <p> • {language==='es'?'Proporcioné soporte técnico y capacitación, incluyendo la creación de manuales de uso para APIs y aplicaciones web, asegurando una implementación efectiva de las tecnologías.':'I provided technical support and training, including the creation of user manuals for APIs and web applications, ensuring the effective implementation of technologies.'}</p>
        <p> • {language==='es'?'Utilicé JMeter para diseñar y ejecutar pruebas de paralelismo y concurrencia en las APIs, evaluando su desempeño bajo cargas intensas y garantizando un tiempo de respuesta inferior a 2s.':'I used JMeter to design and execute parallelism and concurrency tests on APIs, evaluating their performance under heavy loads and ensuring a response time of less than 2 seconds.'}</p>
        <p> • {language==='es'?'Gestioné instancias OnPremise en Windows Server y Linux asegurando la disponibilidad.':'I managed OnPremises instances like Windows Server and Linux, making sure of the continuity and disponibility of the servers.'}</p>        
        <p> • {language==='es'?'Mejoré el rendimiento de consultas de agregación en entornos de Big Data usando ClickHouse y Redis reduciendo los tiempos de procesamiento de datos en un 80%.':'I improved agreggation queries in a BigData environment using Clickhouse and Redis, reducing data time processing in 80%'}</p>
        
        </div>
       
        </div>
      </div>
   
    </section>
  )
}

export default Experience