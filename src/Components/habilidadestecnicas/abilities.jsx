import React, { useContext } from 'react'
import './abilities.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AppContextPanel } from '../../App'
const Abilities = () => {
    const { language,SetLaguange  }  = useContext(AppContextPanel)
  return (
    <section id='abilities'>  
    <h5>{language==='es'?'Conocimiento':'Knowledge'}</h5>
      <h2>{language==='es'?'Mis habilidades tecnicas':'My Technical Knowledge'}</h2>
<div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                {/* <small className='text-light'>Advanced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4 >Typescript</h4>
                {/* <small className='text-light'>Advanced</small> */}
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                {/* <small className='text-light'>Advanced</small> */}
              </div>
            </article>
            
            
           
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
          
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
        
           
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node.js</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Clickhouse</h4>
      
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Redis</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL Server</h4>
      
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Spring</h4>
                {/* <small className='text-light'>Advanced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PosgreSQL</h4>
              
              </div>
            </article>
            
          </div>
        </div>
        <div className='experience__cloud'>
        <h3>{language==='es'?'Otros':'Others'}</h3>
        <div className='experience__content'>

     
        <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JMeter</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
        <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>GitHub</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Selenium</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Servicios Cloud AWS, GCP.</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Google Data Studio</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Power BI</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            </div>
        </div>
        </div>
   
    </section>
  )
}

export default Abilities