"""Generates the English version of Sebastian Julon Chamana's CV as a PDF.

Faithful translation of CV_SebastianJulonChamana_2026_esp_updated (content
pages only - the supporting certificates/diplomas stay in their original
issuing language, which is standard practice for CVs).
"""
from fpdf import FPDF

PRIMARY = (51, 51, 51)
MUTED = (110, 110, 110)
LINK = (0, 102, 204)
RULE = (210, 210, 210)

LEFT = 18
RIGHT = 18
PAGE_WIDTH = 210
CONTENT_WIDTH = PAGE_WIDTH - LEFT - RIGHT


class CV(FPDF):
    def section_title(self, title):
        self.ln(2)
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(*PRIMARY)
        self.cell(0, 8, title, new_x='LMARGIN', new_y='NEXT')
        self.set_draw_color(*RULE)
        self.set_line_width(0.3)
        y = self.get_y()
        self.line(LEFT, y, PAGE_WIDTH - RIGHT, y)
        self.ln(3)

    def job_header(self, role, dates):
        self.set_font('Helvetica', 'B', 10.5)
        self.set_text_color(*PRIMARY)
        self.cell(CONTENT_WIDTH * 0.6, 6, role)
        self.set_font('Helvetica', 'B', 9.5)
        self.set_text_color(*MUTED)
        self.cell(CONTENT_WIDTH * 0.4, 6, dates, align='R', new_x='LMARGIN', new_y='NEXT')

    def company_line(self, text):
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(*PRIMARY)
        self.cell(0, 5.5, text, new_x='LMARGIN', new_y='NEXT')

    def stack_line(self, text):
        self.set_font('Helvetica', 'B', 9)
        self.set_text_color(*MUTED)
        self.multi_cell(0, 5, text, new_x='LMARGIN', new_y='NEXT')
        self.ln(1)

    def subheading(self, text):
        self.set_font('Helvetica', 'B', 9.5)
        self.set_text_color(*PRIMARY)
        self.cell(0, 5.5, text, new_x='LMARGIN', new_y='NEXT')

    def bullet(self, text):
        self.set_font('Helvetica', '', 9.3)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5, '-  ' + text, new_x='LMARGIN', new_y='NEXT')
        self.ln(0.5)

    def plain(self, text):
        self.set_font('Helvetica', '', 9.3)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5, text, new_x='LMARGIN', new_y='NEXT')

    def list_item(self, text):
        self.set_font('Helvetica', '', 9.3)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5, chr(149) + '  ' + text, new_x='LMARGIN', new_y='NEXT')

    def label_line(self, label, value):
        self.set_text_color(40, 40, 40)
        self.set_x(LEFT)
        self.set_font('Helvetica', '', 9.3)
        self.write(5, chr(149) + '  ')
        self.set_font('Helvetica', 'B', 9.3)
        self.write(5, label)
        self.set_font('Helvetica', '', 9.3)
        self.write(5, value)
        self.ln(7)


pdf = CV(format='A4')
pdf.set_margins(LEFT, 16, RIGHT)
pdf.set_auto_page_break(auto=True, margin=16)
pdf.add_page()

# ---- Header ----
pdf.set_font('Helvetica', 'B', 18)
pdf.set_text_color(*PRIMARY)
pdf.cell(0, 10, 'SEBASTIAN JULON CHAMANA', new_x='LMARGIN', new_y='NEXT')

pdf.set_font('Helvetica', '', 10)
pdf.set_text_color(60, 60, 60)
pdf.write(5, 'Lima, Peru | +51 994244459 | antidote149@hotmail.com | ')
pdf.set_text_color(*LINK)
pdf.write(5, 'Portfolio Website', link='https://godeeper96.github.io/portafolio/')
pdf.set_text_color(60, 60, 60)
pdf.write(5, ' | ')
pdf.set_text_color(*LINK)
pdf.write(5, 'LinkedIn', link='https://www.linkedin.com/in/sebastian-julon-chamana/')
pdf.ln(8)

# ---- Professional profile ----
pdf.section_title('Professional Profile')
pdf.plain(
    'Committed to building innovative technology, with over 3 years of experience in the '
    'analysis, design, development, testing, deployment and maintenance of APIs, web '
    'applications, integrations, B2B/B2C ERP systems, cloud services and process '
    'automation, always focused on digital transformation and customer satisfaction.'
)

# ---- Experience ----
pdf.section_title('Experience')

pdf.job_header('AI Developer', 'Sept.2025 - Present')
pdf.company_line('UTP (Universidad Tecnologica del Peru)')
pdf.stack_line(
    'Stack: Python, FastAPI, LangChain, LangGraph, n8n . AWS: Bedrock (Knowledge Bases, Nova '
    'Pro, Guardrails), Lambda, API Gateway, SQS, DynamoDB, S3, Aurora Serverless v2 . Azure: '
    'Functions, Service Bus, Blob Storage, Graph API . LLMs: Claude, Gemini, GPT.'
)
for b in [
    'Built an AI chatbot for student support with a serverless RAG pipeline on AWS (Lambda, '
    'API Gateway, SQS, DynamoDB, S3, Bedrock Knowledge Bases + Aurora Serverless pgvector), '
    'generating responses with Bedrock Nova Pro and using Guardrails for content filtering '
    'and PII detection.',
    'Built a multi-agent system for generating university pedagogical content with LangChain '
    'and Python using multiple LLM models (GPT-4.1-mini + Gemini 2.5 Flash), automating the '
    'creation of course outlines and IPES documents.',
    'Developed a Microsoft Teams agent on Azure Functions, integrated with Graph API to '
    'automatically process meeting transcripts, generate insights with LLMs and publish them '
    'to Monday.com via Azure Service Bus.',
    'Designed institutional automation flows with n8n, integrating LLMs (Claude, Gemini, GPT) '
    'for document processing and operational support.',
    'Evaluated and compared LLM models (Claude, GPT, Gemini) across multiple PoCs, selecting '
    'based on cost, quality and latency per use case.',
]:
    pdf.bullet(b)
pdf.ln(2)

pdf.job_header('FullStack Developer', 'May.2025 - Jul.2025')
pdf.company_line('Periferia IT Group SAC  -  Client: UTP')
pdf.stack_line('Stack: React, Node.js, NestJS, AWS (Lambda), DynamoDB, PostgreSQL, Azure DevOps and SonarQube')
pdf.subheading('Backend')
for b in [
    'Development and implementation of full stack solutions for a university enrollment system.',
    'Implementation of REST APIs using Node.js and NestJS.',
    'Integration of cloud services using AWS, including Lambda functions with databases such '
    'as DynamoDB and PostgreSQL.',
]:
    pdf.bullet(b)
pdf.subheading('Frontend')
for b in [
    'Development of modern interfaces with React, TypeScript and Vite.',
    'Implementation of unit tests with Jest, meeting quality standards defined by SonarQube in Azure DevOps.',
]:
    pdf.bullet(b)
pdf.ln(2)

pdf.job_header('FullStack Developer', 'Mar.2025 - May.2025')
pdf.company_line('IDS Latam S.A.C  -  Client: IXM Metals')
pdf.stack_line(
    'Stack: React, TypeScript, .NET 8, Clean Architecture, multi-module, Micro-Frontend with '
    'webpack, Github, SQL Server, relational databases.'
)
pdf.subheading('Backend')
for b in [
    'Develop backend services in .NET 8 within a microservices environment, applying clean architecture.',
    'Integrate and consume REST APIs with a focus on performance and security.',
]:
    pdf.bullet(b)
pdf.subheading('Frontend')
for b in [
    'Analyze and translate functional requirements into efficient technical solutions.',
    'Design, develop and maintain user interfaces with React and TypeScript, ensuring the best user experience.',
    'Participate in migrating JavaScript-based applications to modern architectures with React.',
    'Collaborate in the adoption of Micro-Frontends, promoting modularity and component independence.',
]:
    pdf.bullet(b)
pdf.ln(2)

pdf.job_header('FullStack Developer', 'May.2023 - Mar.2025')
pdf.company_line('Radar365  -  Client: PG Procter')
pdf.stack_line('Stack: React, AWS, API Gateway, DynamoDB, S3, Cognito, Lambdas, TypeScript, NodeJS.')
pdf.subheading('Backend')
for b in [
    'Implemented and maintained serverless APIs in Node.js using AWS Lambda and API Gateway to '
    'integrate mobile applications, web platforms and other cloud services, handling more than '
    '200 daily requests.',
    'Used DynamoDB to reduce costs and achieve better adaptability to AWS services, easily '
    'connecting Websockets for the use cases that required it.',
    'Implemented AWS services using SAM and CloudFormation to speed up service creation in dev, QA and prod.',
    'Developed enterprise B2B solutions for the governance and secure distribution of data '
    'between companies and/or more than 50 supplier users.',
]:
    pdf.bullet(b)
pdf.subheading('Frontend')
for b in [
    'Migrated desktop applications to the web using React, TypeScript and JavaScript, '
    'deploying the applications with the help of AWS Amplify and SAM.',
    'Followed Figma designs created by other specialists to build the user interface.',
]:
    pdf.bullet(b)

# ---- Projects and achievements ----
pdf.section_title('Projects and Achievements')
pdf.subheading('YALO-HablaPEPE')
pdf.plain(
    'Developed an algorithm for promotions logic, optimizing its workflow and ensuring '
    'efficiency in promotions management. Also built a robust Node.js API backed by DynamoDB, '
    'designed to handle concurrent and recurring traffic, supporting more than 200 daily '
    'queries without interruptions.'
)
pdf.ln(2)
pdf.subheading('Analytics Project')
pdf.plain('Designed and developed a B2B web platform used by more than 50 active users, offering:')
for b in [
    'Massive data export optimized for large volumes.',
    'Advanced filtering and segmentation features to personalize information.',
    'Detailed role and permission management to ensure security and accessibility.',
]:
    pdf.list_item(b)

# ---- Tech knowledge ----
pdf.section_title('Tech Knowledge')
tech = [
    ('Programming languages: ', 'JavaScript, Python, TypeScript, Java, and C#.'),
    ('Frameworks and libraries: ', 'NodeJS, React, NestJS, Next.js, Spring, React Native, Expo, .NET, FastAPI, Electron, LangChain, LangGraph, n8n.'),
    ('Databases: ', 'SQL Server, MongoDB, PostgreSQL, Redis, Clickhouse, DynamoDB.'),
    ('Data analysis tools: ', 'SQL Server Analysis, SQL Server Integration Services, Grafana, MicroStrategy.'),
    ('Web analytics: ', 'Google Data Studio, Power BI.'),
    ('Operating systems: ', 'Linux (Ubuntu 24), Windows Server 2016.'),
    ('Cloud services: ', 'Amazon AWS (Bedrock, Lambda, API Gateway, SQS, DynamoDB, S3, Aurora Serverless), GCP (Google Cloud), Azure.'),
    ('Optimization and testing: ', 'Jest, black-box testing, A/B testing, JMeter, Selenium.'),
    ('Version control: ', 'GitHub, Azure DevOps, GitLab.'),
    ('Methodology: ', 'Agile, Scrum.'),
]
for label, value in tech:
    pdf.label_line(label, value)

# ---- Academic education ----
pdf.section_title('Academic Education')
pdf.set_font('Helvetica', 'B', 10)
pdf.set_text_color(*PRIMARY)
pdf.cell(0, 5.5, "Bachelor's Degree in Information Systems Engineering", new_x='LMARGIN', new_y='NEXT')
pdf.set_font('Helvetica', '', 9.5)
pdf.set_text_color(60, 60, 60)
pdf.cell(CONTENT_WIDTH * 0.7, 5.5, 'Universidad Peruana de Ciencias Aplicadas (UPC)')
pdf.cell(CONTENT_WIDTH * 0.3, 5.5, 'Aug.2015 - Dec.2023', align='R', new_x='LMARGIN', new_y='NEXT')

# ---- Languages ----
pdf.section_title('Languages')
pdf.list_item('Spanish (Native)')
pdf.list_item('English (B2) - IELTS Score 6.5')

# ---- Continuing education ----
pdf.section_title('Continuing Education')
for b in [
    'IBM Cybersecurity Tools & Cyber Attacks - 2022',
    'IELTS Score Exam - 2022',
    'SCRUM STUDY Scrum Fundamentals - 2022',
    'IBM Cloud Application Development Foundations (Cloud Computing, Development with HTML, '
    'CSS, JavaScript, Developing Cloud Native Applications, Developing Cloud Apps with NodeJS '
    'and React) - 2023',
    'Azure Fundamentals AZ-900 - 2025',
    'UI/UX Design CalArts - 2023',
]:
    pdf.list_item(b)

# ---- Academic research ----
pdf.section_title('Academic Research')
pdf.label_line(
    "Predictive Analysis System based on Machine Learning to reduce voluntary resignations "
    "in Lima, Peru (bachelor's thesis): ",
    'We developed a Python-based system using numpy, pandas and SQLite that analyzes and '
    'predicts voluntary resignations using machine learning models for predictability and '
    'accuracy of results.'
)

out_path = '../src/assets/cv-en.pdf'
pdf.output(out_path)
print('Written', out_path)
