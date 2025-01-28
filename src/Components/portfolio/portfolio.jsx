
import './portfolio.css'

import tradde1 from '../../assets/tradde/Login.JPG'
import tradde2 from '../../assets/tradde/image2.svg'
import tradde3 from '../../assets/tradde/image3.svg'

import analytics1 from '../../assets/analytis/image1.svg'
import analytics2 from '../../assets/analytis/image2.svg'
import analytics3 from '../../assets/analytis/image3.svg'

import cubbo1 from '../../assets/cubbo/image1.svg'
import cubbo2 from '../../assets/cubbo/image2.svg'
import cubbo3 from '../../assets/cubbo/image3.svg'


import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AppContextPanel } from '../../App'

const Portfolio = () => {
  const { language,SetLaguange  }  = useContext(AppContextPanel)
  return (
    <section id='portfolio'>
      <h5>{language==='es'?'Mis ultimos proyectos':`My last projects`}</h5>
      <h2>{language==='es'?'Proyectos':`Projects`}</h2>
     
      <div className="container portfolio__container">
      

       
        <article className="portfolio__item">
        <div className="portfolio__item-image">
        <Swiper
        modules={[Autoplay,Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src={analytics1} alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={analytics2} alt="Imagen 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={analytics3} alt="Imagen 3" />
        </SwiperSlide>
       
      </Swiper>
      </div>
          <h3>Analytics</h3>
          <p>{language==='es'?'B2B que permite estandarizar, visualizar y exportar gran cantidad de data a proveedores.':`B2B that allows to standarize, visualize and export big volumes of data to providers/users`}</p>
          <div className='SpaceRowPortfolio'>
        
         
          </div>
        
        </article>
        <article className="portfolio__item">

        <div className="portfolio__item-image">
        <Swiper
        modules={[Autoplay,Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src={tradde1} alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tradde2} alt="Imagen 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tradde3} alt="Imagen 3" />
        </SwiperSlide>
      </Swiper>
      </div>
          <h3>Tradde</h3>
          <p style={{textAlign:'justify'}}>{language==='es'?'Plataforma web que permite gestionar promociones en ambientes de prueba y producción. Sirve a diferentes aplicaciones web y moviles.':'Web platform that allows managing promotions in testing and production environments. It serves different web and mobile applications'}</p>
          <div className='SpaceRowPortfolio'>
      
          </div>
          <div className="portfolio__item-cta">
          {/* <a href="https://github.com/GoDeeper96/matriculaApp" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a> */}
          </div>
        </article>
      
        <article className="portfolio__item">

        <div className="portfolio__item-image">
        <Swiper
        modules={[Autoplay,Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <img src={cubbo1} alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cubbo2} alt="Imagen 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cubbo3} alt="Imagen 3" />
        </SwiperSlide>
      </Swiper>
      </div>
          <h3>Cubbo</h3>
          <p style={{textAlign:'justify'}}>{language==='es'?'B2B de reporteria avanzada que permite crear reportes con graficos personalizables, gestionar cargas pesadas con colas en segundo plano, notificaciones en tiempo real, y consultas de agregación en entornos de gran volumen de datos(BigData).':'B2B advanced reporting platform that allows creating reports with customizable charts, managing heavy loads with background queues, real-time notifications, and aggregation queries in high-volume data environments (Big Data).'}</p>

          <div className='SpaceRowPortfolio'>

          </div>
          <div className="portfolio__item-cta">
     
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio