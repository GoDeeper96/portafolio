
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


import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AppContextPanel } from '../../App'
import ProjectTimeline from './projectTimeline'

const projectTimelines = {
  analytics: {
    duration: { es: 'Construido en 3 meses', en: 'Built in 3 months' },
    deployed: true,
    steps: [
      { es: 'Kickoff', en: 'Kickoff' },
      { es: 'Desarrollo', en: 'Development' },
      { es: 'Lanzamiento', en: 'Launch' },
    ],
  },
  tradde: {
    duration: { es: 'Construido en 1 año', en: 'Built in 1 year' },
    deployed: true,
    steps: [
      { es: 'Kickoff', en: 'Kickoff' },
      { es: 'Desarrollo', en: 'Development' },
      { es: 'Lanzamiento', en: 'Launch' },
    ],
  },
  cubbo: {
    deployed: false,
    steps: [
      { es: 'Kickoff', en: 'Kickoff' },
      { es: 'Desarrollo', en: 'Development' },
      { es: 'Pausado', en: 'Paused' },
    ],
  },
  expertoTematico: {
    duration: { es: 'Proyecto en curso', en: 'Ongoing project' },
    deployed: true,
    steps: [
      { es: 'Diseño arq.', en: 'Architecture' },
      { es: 'Prototipo', en: 'Prototype' },
      { es: 'Validación', en: 'Validation' },
      { es: 'Producción', en: 'Production' },
    ],
  },
  mayihear: {
    deployed: true,
    steps: [
      { es: 'Desktop MVP', en: 'Desktop MVP' },
      { es: 'Agente Teams', en: 'Teams Agent' },
      { es: 'Tesis validada', en: 'Thesis validated' },
    ],
  },
}

const techPanels = {
  expertoTematico: {
    label: { es: 'IA Empresarial · AWS Serverless', en: 'Enterprise AI · AWS Serverless' },
    stack: ['Next.js', 'FastAPI', 'LangGraph', 'LangChain', 'Gemini 2.0', 'GPT-4.1', 'AWS Lambda', 'Step Functions', 'DynamoDB', 'WebSocket'],
    features: {
      es: [
        'Multi-agente con LangGraph que genera IPES y esquemas de curso desde documentos fuente',
        'Dos modos: revisión por pasos con bucles de calidad, o generación unificada con validación',
        'Progreso en tiempo real vía WebSocket',
        'Historial de versiones de IPES con flujo de aprobación',
      ],
      en: [
        'Multi-agent LangGraph system that generates IPES and course schemas from source documents',
        'Two modes: step-by-step with quality revision loops, or unified one-step with validation',
        'Real-time progress updates via WebSocket',
        'IPES version history with approval workflow',
      ],
    },
  },
  mayihear: {
    label: { es: 'App de Escritorio + Agente Empresarial', en: 'Desktop App + Enterprise Agent' },
    stack: ['Electron', 'Python', 'Whisper AI', 'Azure Functions', 'Microsoft Graph', 'MS Teams API', 'SharePoint', 'LLM (RAG)'],
    features: {
      es: [
        'Transcripción automática de audio de reuniones',
        'Chat Q&A sobre el contenido de la reunión (RAG)',
        'Generación automática de Actas de Reunión (el output más valorado)',
        'Agente para Microsoft Teams: procesa grabaciones de SharePoint via Graph API',
      ],
      en: [
        'Automatic audio transcription of meetings',
        'Chat Q&A over meeting content (RAG)',
        'Auto-generated meeting minutes — Actas (the most loved feature)',
        'Enterprise Teams agent: processes SharePoint recordings via Graph API',
      ],
    },
  },
}

const TechPanel = ({ data, language }) => (
  <div className="portfolio__item-tech">
    <span className="portfolio__tech-label">{data.label[language]}</span>
    <div className="portfolio__tech-stack">
      {data.stack.map(t => (
        <span className="portfolio__tech-pill" key={t}>{t}</span>
      ))}
    </div>
    <ul className="portfolio__tech-features">
      {data.features[language].map(f => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  </div>
)

const Portfolio = () => {
  const { language } = useContext(AppContextPanel)
  return (
    <section id='portfolio'>
      <h5>{language === 'es' ? 'Mis ultimos proyectos' : 'My last projects'}</h5>
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item" id="project-analytics">
          <div className="portfolio__item-media">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide><img src={analytics1} alt="Analytics 1" /></SwiperSlide>
              <SwiperSlide><img src={analytics2} alt="Analytics 2" /></SwiperSlide>
              <SwiperSlide><img src={analytics3} alt="Analytics 3" /></SwiperSlide>
            </Swiper>
          </div>
          <div className="portfolio__item-body">
            <h3>Analytics</h3>
            <p>{language === 'es' ? 'B2B que permite estandarizar, visualizar y exportar gran cantidad de data a proveedores.' : 'B2B that allows to standarize, visualize and export big volumes of data to providers/users'}</p>
            <ProjectTimeline language={language} {...projectTimelines.analytics} />
          </div>
        </article>

        <article className="portfolio__item" id="project-tradde">
          <div className="portfolio__item-media">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide><img src={tradde1} alt="Tradde 1" /></SwiperSlide>
              <SwiperSlide><img src={tradde2} alt="Tradde 2" /></SwiperSlide>
              <SwiperSlide><img src={tradde3} alt="Tradde 3" /></SwiperSlide>
            </Swiper>
          </div>
          <div className="portfolio__item-body">
            <h3>Tradde</h3>
            <p style={{ textAlign: 'justify' }}>{language === 'es' ? 'Plataforma web que permite gestionar promociones en ambientes de prueba y producción. Sirve a diferentes aplicaciones web y moviles.' : 'Web platform that allows managing promotions in testing and production environments. It serves different web and mobile applications'}</p>
            <ProjectTimeline language={language} {...projectTimelines.tradde} />
          </div>
        </article>

        <article className="portfolio__item" id="project-cubbo">
          <div className="portfolio__item-media">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide><img src={cubbo1} alt="Cubbo 1" /></SwiperSlide>
              <SwiperSlide><img src={cubbo2} alt="Cubbo 2" /></SwiperSlide>
              <SwiperSlide><img src={cubbo3} alt="Cubbo 3" /></SwiperSlide>
            </Swiper>
          </div>
          <div className="portfolio__item-body">
            <h3>Cubbo</h3>
            <p style={{ textAlign: 'justify' }}>{language === 'es' ? 'B2B de reporteria avanzada que permite crear reportes con graficos personalizables, gestionar cargas pesadas con colas en segundo plano, notificaciones en tiempo real, y consultas de agregación en entornos de gran volumen de datos(BigData).' : 'B2B advanced reporting platform that allows creating reports with customizable charts, managing heavy loads with background queues, real-time notifications, and aggregation queries in high-volume data environments (Big Data).'}</p>
            <ProjectTimeline language={language} {...projectTimelines.cubbo} />
          </div>
        </article>

        <article className="portfolio__item portfolio__item--ai" id="project-experto-tematico">
          <TechPanel data={techPanels.expertoTematico} language={language} />
          <div className="portfolio__item-body">
            <h3>Experto Temático</h3>
            <p>
              {language === 'es'
                ? 'Diseñé la arquitectura de un sistema de IA que genera automáticamente esquemas de curso e IPES (planes de aprendizaje semanales) a partir de sílabos, kickoffs y bibliografía. Orquestación multi-agente con LangGraph sobre FastAPI, infraestructura serverless en AWS con actualizaciones en tiempo real por WebSocket. Hoy es un producto del área de IA en la UTP.'
                : 'Designed the architecture of an AI system that auto-generates course schemas and IPES (weekly learning plans) from syllabi, kickoffs and bibliography. Multi-agent orchestration with LangGraph on FastAPI, serverless AWS infrastructure with real-time WebSocket updates. Now a product of UTP\'s AI area.'}
            </p>
            <ProjectTimeline language={language} {...projectTimelines.expertoTematico} />
          </div>
        </article>

        <article className="portfolio__item portfolio__item--ai" id="project-mayihear">
          <TechPanel data={techPanels.mayihear} language={language} />
          <div className="portfolio__item-body">
            <h3>Mayihear</h3>
            <p>
              {language === 'es'
                ? 'Suite de productividad para reuniones en dos versiones: una app de escritorio (Electron) que graba, transcribe, responde preguntas sobre la reunión por chat y genera el Acta de Reunión automáticamente — y un agente empresarial para Microsoft Teams que procesa grabaciones desde SharePoint vía Graph API, desplegado en Azure Functions. El output más valorado: las Actas generadas por IA. En uso diario por colaboradores de la UTP y base de mi tesis validada.'
                : 'A meeting productivity suite in two versions: a desktop app (Electron) that records, transcribes, answers chat questions about the meeting and auto-generates meeting minutes — and an enterprise agent for Microsoft Teams that processes SharePoint recordings via Graph API, deployed on Azure Functions. The most loved output: AI-generated Actas (meeting minutes). Used daily by UTP staff and the foundation of my validated thesis.'}
            </p>
            <ProjectTimeline language={language} {...projectTimelines.mayihear} />
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
