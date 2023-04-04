import React from 'react'
import './about.css'
import me from '../../assets/yo.jpg'
import me2 from '../../assets/jisus.png'
import me3 from '../../assets/yo3.jpg'
import me4 from '../../assets/yo4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Conoceme</h5>
      <h2>Acerca de mi</h2>

        <div className="container about__container" >
          <div className="about__me">
              <div className="about__me-image">

            <img src={me} alt='me4' className='img-top'/>
            
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experiencia Profesional</h5>
                  <small>5 años de estudios profesionales de Ingenieria de Sistemas de la Informacion</small>
                </article>
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Idiomas</h5>
                  <small>- 4 años de estudio de inglés con certificado IELTS nivel B2 <br/> - 1 año de estudio de Japonés básico</small>

                </article>
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Ultimos trabajos</h5>
                  <small> Desarrollador web en INVERSIONES J&F con funciones:<br/> - Marketing Digital con Google Ads y Analytics <br/> - Desarrollo de componentes y estilos con experiencia de usuario UX/UI <br/> - Implementación de Servicio de integración con IZIpay para pagos virtuales <br/> </small>
                </article>
  
                {/* <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Hobbies o pasatiempos</h5>
                  <small>Me gusta tocar la guitarra, hacer skateboarding, cantar y leer novelas policiacas. Soy fan de las películas de zombies. Además en mis tiempos libres suelo aprender nuevos conceptos sobre programación, ya que me gusta mi carrera y por eso soy autodidacta.</small>
                </article> */}
                {/* <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>200+ Brasil do mundo</small>

                </article> */}
                {/* <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Experience</h5>
                  <small>Más de 5</small>          
                </article>           */}

                </div>
                  <p>
                  Estudiante de Ingeniería de Sistemas de la información con conocimientos en diversos lenguajes de programación e idiomas como inglés y japonés, con capacidad para trabajar en equipo, bajo presión, priorizar tareas, responsabilidades y realizar actividades con ética y entusiasmo. También coordinar y establecer objetivos para lograr un fin común.
                  </p>
                  <a href='#contact' className='btn btn-primary'>Contactarse</a>
                  
              </div>         
             </div>      
    </section>
  )
}

export default about