import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/6208947.jpg'
import Nofear from '../../assets/Nofear.PNG'
import imgScrum from '../../assets/scrum.PNG'
import SeñorBuscandoTaller2 from '../../assets/SeñorBuscandoTaller2.jpeg'
import Ielts from '../../assets/ielts-logotipo.png'
import Seguridad from '../../assets/seguridad.PNG'
import { FaReact } from 'react-icons/fa'
import { DiCss3Full } from 'react-icons/di'
import { FaHtml5 } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { FaJava } from 'react-icons/fa'
import { DiLess } from 'react-icons/di'
import { SiPowerbi} from 'react-icons/si'
import { DiVisualstudio } from 'react-icons/di'
import { SiMicrosoftsqlserver } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiGoogleanalytics } from 'react-icons/si'
import { Icon } from '@iconify/react';
import matlab from '../../assets/matlab.PNG'
import gds from '../../assets/gds.PNG'
import ga from '../../assets/ga.PNG'
import matricula from '../../assets/matricula.PNG'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis ultimos proyectos</h5>
      <h2>Portafolio y Certificados</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={SeñorBuscandoTaller2} alt=""/>
          </div>
          <h3>No fear Project - 2020</h3>
          <DiJavascript1 size={30}/>
          <DiCss3Full size={30}/>
          <FaHtml5 size={30}/>
          <div className="portfolio__item-cta">
          <a href="https://github.com/GoDeeper96/NoFearProjectOne" className='btn' target='_blank'>Github</a>
          <a href="https://godeeper96.github.io/NoFearProjectOne/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>MatriculaApp - 2021</h3>
          <SiPostgresql size={30} />
          <DiJavascript1 size={30}/>
          <DiLess size={30}/>
          <FaJava size={30}/>
          <DiCss3Full size={30}/>
          <FaHtml5 size={30}/>
          <div className="portfolio__item-cta">
          <a href="https://github.com/GoDeeper96/matriculaApp" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
          {/* <article className="portfolio__item">
            
            <div className="portfolio__item-image">
              <img src={IMG1} alt=""/>
            </div>
            <h3>Servicio ETL a Empresa General Cable 2022</h3>
            <SiMicrosoftsqlserver size={30}/>
            <SiPowerbi size={30} />
            <DiVisualstudio size={30}/>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
            </div>
          </article> */}
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>TuPataDerecha - 2022</h3>
          <Icon icon="logos:google-data-studio" style={{ fontSize: '30px' }}/>
          <SiGoogleanalytics size={30}/>
          <div className="portfolio__item-cta">
          <a href="https://www.tupataderecha.org/" className="btn btn-primary" target="_blank">Demo</a>
          </div>
        </article>
        {/* <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>Desarrollo Web de InversionesJyF - 2023</h3>
          <FaReact size={30}/>
          <DiJavascript1 size={30}/>
          <DiCss3Full size={30}/>
          <FaHtml5 size={30}/>

          <div className="portfolio__item-cta">
          
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article> */}
        {/* <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>LiliApp - 2023</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.tupataderecha.org/" className="btn btn-primary" target="_blank">Demo</a>
          </div>
        </article> */}
       <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={ga} alt=""/>
          </div>
          <h3>Google Analytics Avanzado</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1IGdcwdx03Rp0RGppu2ySmQABhhuKZf7G/view?usp=sharing" className="btn btn-primary" target="_blank">Google Analytics</a>
          </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={gds} alt=""/>
          </div>
          <h3>Google Data Studio</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1HvPnpM14KsttJ47EaXTMw6fMLpbETI9l/view?usp=sharing" className="btn btn-primary" target="_blank">Google Data Studio</a>
          </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={Seguridad} alt=""/>
          </div>
          <h3>Coursera IBM Security Analyst Certificate</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1ES-ZpuyuoyFz2u95IgsiORQQtjuKbdgW/view?usp=sharing" className="btn btn-primary" target="_blank">Certificado</a>
          </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={matlab} alt=""/>
          </div>
          <h3>Matlab Basico</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1YnmRDYwtsr9qMLH3f59w8JTLHAQYZ10R/view?usp=sharing" className="btn btn-primary" target="_blank">Matlab</a>
          </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={imgScrum} alt=""/>
          </div>
          <h3>Certificado SCRUM</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1ES-ZpuyuoyFz2u95IgsiORQQtjuKbdgW/view?usp=sharing" className="btn btn-primary" target="_blank">Descargar Aqui</a>
          </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={Ielts} alt=""/>
          </div>
          <h3>Certificado IELTS B2 </h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1FBo10MWP_JZB8UsG1m_6cYiBK7I-6x6u/view?usp=sharing" className="btn btn-primary" target="_blank">Descargar Aqui</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio