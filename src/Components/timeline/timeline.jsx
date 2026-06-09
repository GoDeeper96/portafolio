import React, { useContext } from 'react'
import './timeline.css'
import { FaArrowRight } from 'react-icons/fa'
import { AppContextPanel } from '../../App'

const milestones = [
  {
    date: { es: 'Mayo 2023', en: 'May 2023' },
    company: 'Radar 365',
    role: { es: 'FullStack Developer', en: 'FullStack Developer' },
    blurb: {
      es: 'Arranqué construyendo APIs serverless en AWS y soluciones B2B para más de 50 empresas proveedoras.',
      en: 'Started out building serverless AWS APIs and B2B solutions for 50+ supplier companies.',
    },
    link: '#exp-radar365',
    projects: [
      { label: 'Tradde', link: '#project-tradde' },
      { label: 'Cubbo', link: '#project-cubbo' },
    ],
  },
  {
    date: { es: 'Marzo 2025', en: 'Mar 2025' },
    company: 'IDS Latam',
    role: { es: 'FullStack Developer · .NET', en: 'FullStack Developer · .NET' },
    blurb: {
      es: 'Desarrollo FullStack en .NET con microservicios: corrección de bugs, mantenimiento de aplicaciones y reportes en Power BI.',
      en: 'FullStack development in .NET with microservices: bug fixes, application maintenance and Power BI reporting.',
    },
    link: '#exp-idslatam',
  },
  {
    date: { es: 'Mayo 2025', en: 'May 2025' },
    company: 'Periferia IT Group',
    role: { es: 'FullStack Developer', en: 'FullStack Developer' },
    blurb: {
      es: 'Colaboré con NestJS, React y AWS (Lambda, DynamoDB) en el sistema de matrículas de la UTP, cliente del proyecto.',
      en: "Contributed with NestJS, React and AWS (Lambda, DynamoDB) to UTP's enrollment system — UTP being the project's client.",
    },
    link: '#exp-periferia',
  },
  {
    date: { es: 'Sept 2025 · Actual', en: 'Sept 2025 · Present' },
    company: 'UTP',
    role: { es: 'Desarrollador IA', en: 'AI Developer' },
    blurb: {
      es: 'Construyo agentes de IA (Vertex AI) para potenciar el aprendizaje, y lidero Mayihear: mi suite que transcribe reuniones y redacta Actas automáticamente — ya en uso diario en la UTP, y de paso, mi tesis.',
      en: "Building AI agents (Vertex AI) to power learning experiences, and leading Mayihear: my suite that transcribes meetings and drafts minutes automatically — used daily at UTP, and yes, it's also my thesis.",
    },
    link: '#exp-utp',
    projects: [
      { label: 'Experto Temático', link: '#project-experto-tematico' },
      { label: 'Mayihear', link: '#project-mayihear' },
    ],
    current: true,
  },
]

const goal = {
  es: {
    tag: 'Hacia dónde voy',
    text: 'Especializarme como Ingeniero de IA: arquitecturas agentic, RAG en producción y plataformas LLM a escala.',
  },
  en: {
    tag: "Where I'm headed",
    text: 'Specializing as an AI Engineer: agentic architectures, production-grade RAG and LLM platforms at scale.',
  },
}

const Timeline = () => {
  const { language } = useContext(AppContextPanel)

  return (
    <section id="timeline" className="timeline-section">
      <h5>{language === 'es' ? 'Mi trayectoria' : 'My journey'}</h5>
      <h2>{language === 'es' ? 'Resumen profesional' : 'Professional summary at a glance'}</h2>
      <p className="timeline__stat">
        <strong>{language === 'es' ? '3 años y 6 meses' : '3 years & 6 months'}</strong>
        {' '}
        {language === 'es' ? 'de experiencia profesional planeando,diseñando,validando e implementando software en la nube — hoy enfocados en IA aplicada.' : 'of professional experience building cloud software — now focused on applied AI.'}
      </p>
      <div className="container timeline__container">
        <div className="timeline__track">
          {milestones.map((m) => (
            <div className={`timeline__node ${m.current ? 'timeline__node--current' : ''}`} key={m.company}>
              <span className="timeline__dot" />
              <span className="timeline__date">{m.date[language]}</span>
              <a className="timeline__company" href={m.link}>
                <span>{m.company}</span>
                <FaArrowRight className="timeline__company-arrow" />
              </a>
              <span className="timeline__role">{m.role[language]}</span>
              <p className="timeline__blurb">{m.blurb[language]}</p>
              {m.projects && (
                <div className="timeline__projects">
                  {m.projects.map((p) => (
                    <a className="timeline__project-chip" href={p.link} key={p.label}>
                      {p.label}
                    </a>
                  ))}
                </div>
              )}
              {m.current && (
                <span className="timeline__badge">{language === 'es' ? 'Actual' : 'Current'}</span>
              )}
            </div>
          ))}

          <div className="timeline__node timeline__node--goal">
            <span className="timeline__dot timeline__dot--goal" />
            <span className="timeline__date">
              <FaArrowRight /> {goal[language].tag}
            </span>
            <p className="timeline__blurb">{goal[language].text}</p>
          </div>
        </div>
        <p className="timeline__hint">
          {language === 'es'
            ? 'Toca un puesto o proyecto para ver el detalle completo más abajo.'
            : 'Tap a role or project to jump to the full details below.'}
        </p>
      </div>
    </section>
  )
}

export default Timeline
