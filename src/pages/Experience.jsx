export default function Experience() {
  const experiences = [
    {
      role: "IT Developer",
      company: "Vosyn",
      location: "Ontario, Canada",
      period: "May 2026 - Present",
      project: "Aquarius Platform & Backend Services",
      bullets: [
        "Customization of the Aquarius platform using React, JavaScript, HTML, CSS and PostgreSQL.",
        "Built and optimized REST APIs and microservices for scalable, high-performance solutions.",
        "Enhanced database performance through optimized queries and schema design.",
        "Implemented CI/CD pipelines using GitHub Actions for smooth deployments.",
        "Utilized Docker for containerization, ensuring consistent environments across development and production.",
        "Managed code versions using Git/GitHub ensuring clean collaboration.",
        "Conducted unit and integration testing with JUnit for robust application delivery.",
        "Worked in Agile Scrum teams to deliver features within sprint timelines."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Omega Healthcare Management Services",
      location: "Bangalore, India",
      period: "Apr 2021 - Apr 2026",
      project: "Custom Web Applications & AI-driven Assessment Systems",
      bullets: [
        "Developed and maintained 10+ custom web applications using JavaScript, HTML, CSS, and Bootstrap throughout the software development life cycle, increasing internal tool adoption by 45% and reducing manual processing time by 30%, showcasing attention to detail and user-focused design.",
        "Integrated OpenAI language models to automate assessment of AR user audio notes, comparing with reference responses to improve scoring consistency by 40% and enhance training feedback by applying strong problem-solving skills and AI integration knowledge.",
        "Designed and implemented live dashboards and real-time reporting tools using HTML Canvas and Highcharts, improving visibility into key operational metrics and accelerating decision-making by 30% through effective data presentation.",
        "Led and mentored a team of three junior developers, using CAST Highlight code reader for static code analysis to enforce best practices, improve code quality, and reduce post-deployment issues by 50%, demonstrating strong leadership, communication, and effective team coordination.",
        "Delivered technical support and rapid issue resolution across applications, maintaining 98% uptime and increasing system reliability and user satisfaction by 25%, requiring excellent verbal communication and troubleshooting abilities."
      ]
    },
    {
      role: "Software Developer",
      company: "Indian Space Research Organisation (ISRO)",
      location: "Bangalore, India",
      period: "Jul 2017 - May 2020",
      project: "ACSS Tracker & Satellite Telemetry Systems (Chandrayaan Mission)",
      bullets: [
        "Developed and deployed a responsive front-end UI for the ACSS Tracker used by 50+ satellite engineers, employing web development best practices to reduce manual tracking time by 40% (~200 hours/month) by creating a unified feature map and automating status updates.",
        "Engineered robust backend systems using PHP, MySQL, and stored procedures to process and manage over 2 TB of satellite telemetry data, increasing data retrieval speed by 60% and ensuring performance stability during high-pressure launch simulations.",
        "Played a key role in the Chandrayaan mission by enabling real-time display and interaction with live satellite telemetry, reducing pre-launch validation time by 25%, and demonstrating strong attention to detail and teamwork.",
        "Integrated version traceability and feature-observation mapping across 10+ ACSS software iterations, increasing debugging efficiency and compliance tracking by 35% applying strong organization skills.",
        "Collaborated with cross-functional teams to simulate and validate launch workflows, reducing deployment errors by 70%, and significantly enhancing overall system reliability, requiring effective teamwork, problem solving and clear communication."
      ]
    }
  ];

  return (
    <div className="container py-5">
      <div className="section-header text-center mb-5">
        <h2 className="display-4 fw-bold"><span className="gold">Work Experience</span></h2>
        <p className="text-muted">My professional journey and career milestones</p>
      </div>

      <div className="timeline-container mx-auto" style={{ maxWidth: '850px' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item d-flex mb-5 position-relative">
            <div className="timeline-dot"></div>
            <div className="timeline-content p-4 rounded shadow">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                <div>
                  <h4 className="fw-bold mb-1 gold">{exp.role}</h4>
                  <h5 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>{exp.company}</h5>
                  <span className="text-muted" style={{ fontSize: '0.85rem' }}>📍 {exp.location}</span>
                </div>
                <span className="timeline-period badge">{exp.period}</span>
              </div>

              <div className="project-details mb-3 p-3 rounded" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)', borderLeft: '3px solid var(--gold)' }}>
                <span className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>Project</span>
                <span className="fw-bold" style={{ fontSize: '0.95rem' }}>{exp.project}</span>
              </div>

              <span className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>Key Responsibilities & Deliverables</span>
              <ul className="text-muted pl-3" style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="mb-2">{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
