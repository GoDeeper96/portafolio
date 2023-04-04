import React from 'react'
import './testimonials.css'
import me from '../../assets/yo.jpg'
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Lo que dicen mis clientes</h5>
      <h2>Testimonios</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar One"/>
            
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Labore eveniet saepe quam enim molestias totam alias repudiandae, 
              fuga dicta aspernatur? Ab eveniet repudiandae quas laborum, placeat quidem quis sint ipsum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar One"/>
            
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Labore eveniet saepe quam enim molestias totam alias repudiandae, 
              fuga dicta aspernatur? Ab eveniet repudiandae quas laborum, placeat quidem quis sint ipsum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar One"/>
            
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Labore eveniet saepe quam enim molestias totam alias repudiandae, 
              fuga dicta aspernatur? Ab eveniet repudiandae quas laborum, placeat quidem quis sint ipsum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar One"/>
            
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Labore eveniet saepe quam enim molestias totam alias repudiandae, 
              fuga dicta aspernatur? Ab eveniet repudiandae quas laborum, placeat quidem quis sint ipsum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar One"/>
            
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Labore eveniet saepe quam enim molestias totam alias repudiandae, 
              fuga dicta aspernatur? Ab eveniet repudiandae quas laborum, placeat quidem quis sint ipsum?
          </small>
        </article>
      </div>
    </section>
  )
}

export default testimonials