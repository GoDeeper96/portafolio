import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  return (
    <section id='contact'>
      {/* <h5>Mensajeame</h5> */}
      <h2>Contactame</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sejulonc@gmail.com@gmail.com</h5>
            <a href="mailto:sejulonc@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option" target="_blank">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+511 994244459</h5>
            <a href="https://wa.me/51994244459" target="_blank">Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name="name" placeholder="Tu nombre completo" required/>
          <input type="email" name="email" placeholder="Tu correo" required/>
          <textarea name="message" rows="7" placeholder="Tu mensaje" required> </textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default contact