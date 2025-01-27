
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


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const portfolio = () => {
 
  return (
    <section id='portfolio'>
      <h5>Mis ultimos proyectos</h5>
      <h2>Proyectos</h2>
     
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
          <p>B2B que permite estandarizar, visualizar y exportar gran cantidad de data a proveedores.</p>
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
          <p style={{textAlign:'justify'}}>Plataforma web que permite gestionar promociones en ambientes de prueba y producción. Sirve a diferentes aplicaciones web y moviles.</p>
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
          <p style={{textAlign:'justify'}}>B2B de reporteria avanzada que permite crear reportes con graficos personalizables, gestionar cargas pesadas con colas en segundo plano, notificaciones en tiempo real, y consultas de agregación en entornos de gran volumen de datos(BigData).</p>

          <div className='SpaceRowPortfolio'>

          </div>
          <div className="portfolio__item-cta">
     
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio