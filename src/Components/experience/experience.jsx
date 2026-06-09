import React, { useContext } from 'react'
import './experience.css'
import { AppContextPanel } from '../../App'
const Experience = () => {
  const { language, SetLaguange } = useContext(AppContextPanel)
  return (
    <section id="experience">
      <h5>{language === "es" ? "Experiencia adquirida" : "Experience"}</h5>
      <h2>{language === "es" ? "Mi experiencia" : "My Work Experience"}</h2>
      <div className="container experience__container">
        <div className="experience__job" id="exp-utp">
          <div className="SpaceRowAround">
            <h2>
              <a href="https://www.utp.edu.pe/">UTP (Universidad Tecnológica del Perú)</a>
            </h2>
            <h5 className="text-light">{language === "es" ? "Sept.2025 - Actual" : "Sept.2025 - Present"}</h5>
          </div>
          <h5 className="text-light">{language === "es" ? "Desarrollador IA" : "AI Developer"}</h5>
          <div className="gridSeparated">
            <div>
              <h3 className="TextSubTititle">{language === "es" ? "Funciones" : `What I've done`}</h3>
              <p className="text-light">
                Stack: Python, FastAPI, LangChain, LangGraph, n8n, Google Vertex AI · AWS Bedrock (Knowledge Bases, Nova Pro, Guardrails), Lambda, API Gateway, SQS, DynamoDB, S3, Aurora Serverless v2 · Azure Functions, Service Bus, Blob Storage, Graph API · LLMs: Claude, Gemini, GPT
              </p>
            </div>
            <p id="exp-utp-mvps">
              •{" "}
              {language === "es"
                ? "Como parte del área/comunidad de IA de la UTP —referente para cualquier iniciativa de IA a nivel institucional— diseñé y desarrollé múltiples MVPs y PoCs para mejorar la experiencia de los estudiantes en cursos virtuales, sobre todo agentes de generación de contenido educativo (videos, PPTs, audio) construidos principalmente con Google Vertex AI."
                : "As part of UTP's AI team — the go-to area for any institutional AI initiative — I designed and built multiple MVPs and PoCs to improve students' virtual-course experience, mainly content-generation agents for educational material (videos, slide decks, audio) built mostly on Google Vertex AI."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Construí un sistema multiagente de generación de contenido pedagógico universitario con LangChain y Python usando distintos modelos LLM (GPT-4.1-mini + Gemini 2.5 Flash), automatizando la creación de esquemas de curso e IPES."
                : "Built a multi-agent system for generating university pedagogical content with LangChain and Python using multiple LLMs (GPT-4.1-mini + Gemini 2.5 Flash), automating the creation of course outlines and IPES documents."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Además, exploré chatbots de atención estudiantil: prototipé un pipeline RAG serverless en AWS (Lambda, API Gateway, SQS, DynamoDB, S3, Bedrock Knowledge Bases + Aurora Serverless pgvector) con generación vía Bedrock Nova Pro y Guardrails para filtrado de contenido y detección de PII."
                : "Also explored student-support chatbots: prototyped a serverless RAG pipeline on AWS (Lambda, API Gateway, SQS, DynamoDB, S3, Bedrock Knowledge Bases + Aurora Serverless pgvector) with generation via Bedrock Nova Pro and Guardrails for content filtering and PII detection."}
            </p>
            <p id="exp-utp-experto">
              •{" "}
              {language === "es"
                ? "Diseñé e implementé la arquitectura de Experto Temático, una solución de IA pensada para escalar a nivel empresarial, hoy mostrada como producto propio del área de IA."
                : "Designed the architecture behind Experto Temático, an AI solution built to scale at an enterprise level, now showcased as a flagship product of the AI area."}
              {" "}<a href="#project-experto-tematico" className="exp__project-link">{language === "es" ? "Ver proyecto →" : "See project →"}</a>
            </p>
            <p id="exp-utp-mayihear">
              •{" "}
              {language === "es"
                ? "Lideré Mayihear, una suite de productividad para transcripción de audio —agente de Microsoft Teams a nivel empresarial vía Graph API y Azure Functions, más una app de escritorio para uso individual— que resume reuniones, responde preguntas por chat y genera Actas de Reunión automáticamente. Hoy la usan colaboradores de la UTP en su día a día, y se convirtió en mi tesis (ya validada)."
                : "Led Mayihear, an audio-transcription productivity suite — an enterprise Microsoft Teams agent via Graph API and Azure Functions, plus an individual desktop app — that summarizes meetings, answers questions via chat, and automatically generates meeting minutes ('Actas de Reunión'). UTP staff now use it daily, and it became my (already validated) thesis."}
              {" "}<a href="#project-mayihear" className="exp__project-link">{language === "es" ? "Ver proyecto →" : "See project →"}</a>
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Diseñé flujos de automatización institucional con n8n, integrando LLMs (Claude, Gemini, GPT) para procesamiento de documentos y soporte operativo."
                : "Designed institutional automation flows with n8n, integrating LLMs (Claude, Gemini, GPT) for document processing and operational support."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Evalué y comparé modelos LLM (Claude, GPT, Gemini) en múltiples PoCs, seleccionando según costo, calidad y latencia para cada caso de uso."
                : "Evaluated and compared LLM models (Claude, GPT, Gemini) across multiple PoCs, selecting based on cost, quality, and latency for each use case."}
            </p>
          </div>
        </div>


        <div className="experience__job" id="exp-periferia">
          <div className="SpaceRowAround">
            <h2>
              <a href="https://periferiaitgroup.pe/">Periferia IT Group SAC</a>
            </h2>
            <h5 className="text-light">{language === "es" ? "May.2025 - Jul.2025" : "May.2025 - Jul.2025"}</h5>
          </div>
          <h5 className="text-light">{language === "es" ? "Desarrollador FullStack" : "FullStack Developer"}</h5>
          <div className="gridSeparated">
            <div>
              <h3 className="TextSubTititle">{language === "es" ? "Funciones" : `What I've done`}</h3>
            </div>
            <p>
              •{" "}
              {language === "es"
                ? "Colaboré en el desarrollo del sistema de matrículas universitarias para la UTP, cliente del proyecto liderado por Periferia IT Group."
                : "Contributed to building the university enrollment system for UTP, the client of the project led by Periferia IT Group."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Implementé APIs REST utilizando Node.js y NestJS."
                : "Implemented REST APIs using Node.js and NestJS."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Integré servicios cloud utilizando AWS, incluyendo funciones Lambda y DynamoDB junto con bases de datos como PostgreSQL."
                : "Integrated cloud services using AWS, including Lambda functions and DynamoDB alongside databases like PostgreSQL."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Desarrollé interfaces modernas con React, TypeScript y Vite."
                : "Developed modern interfaces with React, TypeScript and Vite."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Implementé pruebas unitarias con Jest, cumpliendo con estándares de calidad definidos por SonarQube en Azure DevOps."
                : "Implemented unit tests with Jest, meeting quality standards defined by SonarQube in Azure DevOps."}
            </p>
          </div>
        </div>

        <div className="experience__job" id="exp-idslatam">
          <div className="SpaceRowAround">
            <h2>
              <a href="https://www.idslatam.com/">IDS Latam S.A.C</a>
            </h2>
            <h5 className="text-light">{language === "es" ? "Mar.2025 - May.2025" : "Mar.2025 - May.2025"}</h5>
          </div>
          <h5 className="text-light">{language === "es" ? "Desarrollador FullStack" : "FullStack Developer"}</h5>
          <div className="gridSeparated">
            <div>
              <h3 className="TextSubTititle">{language === "es" ? "Funciones" : `What I've done`}</h3>
            </div>
            <p>
              •{" "}
              {language === "es"
                ? "Analicé y traduje requerimientos funcionales en soluciones técnicas eficientes."
                : "Analyzed and translated functional requirements into efficient technical solutions."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Diseñé, desarrollé y mantuve interfaces de usuario con React y TypeScript, garantizando la mejor experiencia de usuario."
                : "Designed, developed and maintained user interfaces with React and TypeScript, ensuring the best user experience."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Integré y consumí APIs REST con enfoque en rendimiento y seguridad."
                : "Integrated and consumed REST APIs with focus on performance and security."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Participé en la migración de aplicaciones basadas en JavaScript hacia arquitecturas modernas con React."
                : "Participated in migrating JavaScript-based applications to modern architectures with React."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Colaboré en la adopción de Micro-Frontends, promoviendo la modularidad y la independencia de componentes."
                : "Collaborated in the adoption of Micro-Frontends, promoting modularity and component independence."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Desarrollé servicios backend en .NET dentro de un entorno de microservicios."
                : "Developed backend services in .NET within a microservices environment."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Apoyé en la corrección de bugs y el mantenimiento de las aplicaciones existentes, además de construir reportes en Power BI."
                : "Helped fix bugs and maintain existing applications, and built reports in Power BI."}
            </p>
          </div>
        </div>

        <div className="experience__job" id="exp-radar365">
          <div className="SpaceRowAround">
            <h2>
              <a href="https://radar-365.com/">Radar 365</a>
            </h2>
            <h5 className="text-light">{language === "es" ? "May.2023 - Mar.2025" : "May.2023 - Mar.2025"}</h5>
          </div>
          <h5 className="text-light">{language === "es" ? "Desarrollador FullStack" : "FullStack Developer"}</h5>
          <div className="gridSeparated">
            <div>
              <h3 className="TextSubTititle">{language === "es" ? "Funciones" : `What I've done`}</h3>
            </div>
            <p>
              •{" "}
              {language === "es"
                ? "Implementé y mantuve APIs serverless en Node.js usando AWS Lambda y API Gateway para integrar aplicaciones móviles, plataformas web y otros servicios en la nube, gestionando más de 200 solicitudes diarias."
                : "Implemented and maintained serverless APIs in Node.js using AWS Lambda and API Gateway to integrate mobile applications, web platforms and other cloud services, managing over 200 daily requests."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Utilicé DynamoDB para reducir costos y lograr una mejor adaptabilidad a servicios AWS, pudiendo conectar Websockets fácilmente en los casos de uso que eran necesarios."
                : "Used DynamoDB to reduce costs and achieve better adaptability to AWS services, easily connecting Websockets in necessary use cases."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Implementé servicios AWS usando SAM y CloudFormation para acelerar la creación de servicios en dev, QA y prod."
                : "Implemented AWS services using SAM and CloudFormation to accelerate service creation in dev, QA and prod."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Desarrollé soluciones B2B empresariales para la gobernanza y distribución segura de datos entre compañías y/o más de 50 usuarios proveedores."
                : "Developed enterprise B2B solutions for governance and secure data distribution between companies and/or over 50 supplier users."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Migré aplicaciones de escritorio a la web utilizando React, TypeScript y JavaScript desplegando las aplicaciones con ayuda de AWS Amplify y SAM."
                : "Migrated desktop applications to the web using React, TypeScript and JavaScript, deploying applications with AWS Amplify and SAM."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Me guié de Figma diseñado por otros especialistas para crear la interfaz de usuario."
                : "Followed Figma designs created by other specialists to build the user interface."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience