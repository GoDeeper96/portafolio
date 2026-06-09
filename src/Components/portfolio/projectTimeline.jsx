import React from 'react'
import './projectTimeline.css'

const ProjectTimeline = ({ language, duration, deployed, steps = [] }) => {
  return (
    <div className="project-timeline">
      <div className="project-timeline__meta">
        {duration && (
          <span className="project-timeline__duration">{duration[language]}</span>
        )}
        <span className={`project-timeline__status ${deployed ? 'is-deployed' : 'is-undeployed'}`}>
          {deployed
            ? (language === 'es' ? 'Desplegado en producción' : 'Deployed to production')
            : (language === 'es' ? 'No llegó a desplegarse' : 'Never deployed')}
        </span>
      </div>
      <div className="project-timeline__track">
        {steps.map((step, i) => (
          <div className="project-timeline__step" key={i}>
            <span className="project-timeline__dot" />
            <span className="project-timeline__label">{step[language]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectTimeline
