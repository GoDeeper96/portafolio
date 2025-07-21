import React, { useContext } from 'react'
import './experience.css'
import { AppContextPanel } from '../../App'
const Experience = () => {
     const { language,SetLaguange  }  = useContext(AppContextPanel)
  return (
    <section id='experience'>
      <h5>{language==='es'?'Experiencia adquirida':'Experience'}</h5>
      <h2>{language==='es'?'Mi experiencia':'My Work Experience'}</h2>
      <div className="container experience__container">
        <div className='experience__job'>
          <div className='SpaceRowAround'>
        <h2 ><a href='https://radar-365.com/'>Radar 365</a></h2>
        
        <h5 className="text-light">{language==='es'?'Mayo.2023 - May.2025':'May.2023 - May.2025'}</h5>
        
        </div>
         <h5 className="text-light">{language==='es'?'Desarrollador FullStack':'FullStack Developer'}</h5>
        <div className='gridSeparated'>
        <div>
        <h3 className="TextSubTititle">{language==='es'?'Funciones':`What I've done`} </h3>
        
         </div>
         <p>
          • {language === 'es'
            ? 'Desarrollé e integré APIs en NodeJS para apps web y móviles.'
            : 'Developed and integrated NodeJS APIs for web/mobile apps.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Migré aplicaciones de escritorio a web con React y TypeScript.'
            : 'Migrated desktop apps to web using React and TypeScript.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Colaboré con usuarios finales para optimizar la interfaz.'
            : 'Collaborated with end users to improve UI.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Gestioné servidores OnPremise (Windows/Linux).'
            : 'Managed OnPremise servers (Windows/Linux).'}
        </p>
        <p>
          • {language === 'es'
            ? 'Optimicé consultas en entornos Big Data (ClickHouse, Redis).'
            : 'Optimized Big Data queries (ClickHouse, Redis).'}
        </p>
            </div>
        </div>


        <div className='experience__job'>
           <div className='SpaceRowAround'>
        <h2>
          <a href='https://www.idslatam.com/'>IDS Latam</a>
          </h2>
        <h5 className="text-light">{language==='es'?'Mar.2025 - May.2025':'Mar.2025 - May.2025'}</h5>
       
        </div>
          <h5 className="text-light">{language==='es'?'Analista de Software':'Software Analyst'}</h5>
        <div className='gridSeparated'>
        <div>
        <h3 className="TextSubTititle">{language==='es'?'Funciones':`What I've done`} </h3>
       
         </div>
          <p>
          • {language === 'es'
            ? 'Analicé requisitos funcionales y los traduje en soluciones técnicas eficientes.'
            : 'Analyzed functional requirements and translated them into efficient technical solutions.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Diseñé y optimicé interfaces con React y TypeScript, mejorando la experiencia.'
            : 'Designed and optimized interfaces using React and TypeScript.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Integré y consumí APIs REST con enfoque en rendimiento y seguridad.'
            : 'Integrated and consumed REST APIs with focus on performance and security.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Colaboré en la adopción de Micro-Frontends.'
            : 'Collaborated in the adoption of Micro-Frontends.'}
        </p>
        <p>
          • {language === 'es'
            ? 'Desarrollé servicios backend en .NET 8 dentro de una arquitectura de microservicios limpia y escalable.'
            : 'Developed backend services in .NET 8 within a clean and scalable microservices architecture.'}
        </p>
            </div>
        </div>
        <div className='experience__job'>
           <div className='SpaceRowAround'>
        <h2> <a href='https://periferiaitgroup.pe/'> Periferia IT</a></h2>
        <h5 className="text-light">{language==='es'?'May.2025-Jul.2025':'May.2025-Jul.2025'}</h5>
        </div>
           <h5 className="text-light">{language==='es'?'Desarrollador FullStack':'FullStack Developer'}</h5>
        <div className='gridSeparated'>
        <div>
        <h3 className="TextSubTititle">{language==='es'?'Funciones':`What I've done`} </h3>
         </div>
          <p>
            • {language === 'es'
              ? 'Realicé mantenimiento y resolución de bugs de un sistema de matrículas universitarias.'
              : 'Performed maintenance and bug fixing in a university enrollment system.'}
          </p>
          <p>
            • {language === 'es'
              ? 'Desarrollo de componentes y vistas con React, TypeScript y Vite.'
              : 'Developed views and components using React, TypeScript, and Vite.'}
          </p>
          <p>
            • {language === 'es'
              ? 'Implementé servicios Lambda y APIs con NestJS, integrando bases de datos DynamoDB y PostgreSQL.'
              : 'Implemented Lambda services and APIs with NestJS, integrating DynamoDB and PostgreSQL databases.'}
          </p>
          <p>
            • {language === 'es'
              ? 'Escribí pruebas unitarias con Jest, cumpliendo con estándares de calidad definidos por SonarQube en Azure DevOps.'
              : 'Wrote unit tests using Jest, meeting quality standards defined by SonarQube in Azure DevOps.'}
          </p>

            </div>
        </div>
      
      </div>
      {/* <div className='experienceContainerJob'>
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
        
      </div> */}
      
   
    </section>
  )
}

export default Experience