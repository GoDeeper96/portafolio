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
        {/* <div className="experience__job">
          <div className="SpaceRowAround">
            <h2>
              <a href="https://www.utp.edu.pe/">UTP (Universidad Tecnológica del Perú)</a>
            </h2>
            <h5 className="text-light">{language === "es" ? "Sept.2025 - Actual" : "Sept.2025 - Present"}</h5>
          </div>
          <h5 className="text-light">{language === "es" ? "Desarrollador Backend" : "Backend Developer"}</h5>
          <div className="gridSeparated">
            <div>
              <h3 className="TextSubTititle">{language === "es" ? "Funciones" : `What I've done`}</h3>
            </div>
            <p>
              •{" "}
              {language === "es"
                ? "Implementé soluciones usando servicios AWS (lambdas, S3, DynamoDB)."
                : "Implemented solutions using AWS services (Lambdas, S3, DynamoDB)."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Desarrollé MVPs/PoCs aprovechando tecnologías emergentes de IA usando Langchain y Langgraph."
                : "Developed MVPs/PoCs leveraging emerging AI technologies using Langchain and Langgraph."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Di soporte y mantenimiento a MVPs/PoCs y funcionalidades clave."
                : "Provided support and maintenance to MVPs/PoCs and key functionalities."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Investigué y evalué nuevas tecnologías para mejorar las aplicaciones existentes."
                : "Researched and evaluated new technologies to improve existing applications."}
            </p>
          </div>
        </div> */}
        <div className="experience__job">
          <div className="SpaceRowAround">
            <h2>
              <a href="https://indigital.pe/">Indigital</a>
            </h2>
            <h5 className="text-light">{language === "es" ? "Agos.2025 - Dec.2025" : "Aug.2025 - Dec.2025"}</h5>
          </div>
          <h5 className="text-light">{language === "es" ? "Desarrollador Backend" : "Backend Developer"}</h5>
          <div className="gridSeparated">
            <div>
              <h3 className="TextSubTititle">{language === "es" ? "Funciones" : `What I've done`}</h3>
              <p className="text-light">
                Stack: AWS DynamoDB, S3, Python, API Gateway, Route 53, SQS, Lambda, WebSocket, Cognito
              </p>
            </div>
            <p>
              •{" "}
              {language === "es"
                ? "Diseñé e implementé Amazon SQS para habilitar la comunicación cross-account entre dos aplicaciones basadas en DynamoDB, en distintos entornos, incluyendo integración en tiempo real mediante WebSockets."
                : "Designed and implemented Amazon SQS to enable cross-account communication between two DynamoDB-based applications in different environments, including real-time integration via WebSockets."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Desarrollé funcionalidades backend con Python desplegando lambdas para dos módulos principales."
                : "Developed backend functionalities with Python by deploying lambdas for two main modules."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Implementé un servicio de firma digital de documentos utilizando librerías en Python."
                : "Implemented a digital document signing service using Python libraries."}
            </p>
            <p>
              •{" "}
              {language === "es"
                ? "Refactoricé código backend para mejorar mantenibilidad y calidad."
                : "Refactored backend code to improve maintainability and quality."}
            </p>
          </div>
        </div>
   

        <div className="experience__job">
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
                ? "Desarrollo e implementación de soluciones full stack para un sistema de matrículas universitarias."
                : "Development and implementation of full stack solutions for a university enrollment system."}
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
                ? "Integré servicios cloud utilizando AWS, incluyendo funciones Lambda con bases de datos como DynamoDB y PostgreSQL."
                : "Integrated cloud services using AWS, including Lambda functions with databases like DynamoDB and PostgreSQL."}
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

        <div className="experience__job">
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
                ? "Desarrollé servicios backend en .NET 8 dentro de un entorno de microservicios, aplicando arquitectura limpia."
                : "Developed backend services in .NET 8 within a microservices environment, applying clean architecture."}
            </p>
          </div>
        </div>

        <div className="experience__job">
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