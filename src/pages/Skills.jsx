export default function Skills() {
  const categories = [
    {
      name: "Programming Languages",
      skills: ["PHP", "JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Angular", "Bootstrap", "Tailwind CSS", "jQuery", "Qt"]
    },
    {
      name: "Web Technologies",
      skills: ["HTML5", "CSS3", "AJAX", "XML", "JSON", "Responsive Web Design", "SEO", "UI/UX Development"]
    },
    {
      name: "Servers & Infrastructure",
      skills: ["Windows Server", "Linux", "IIS", "Apache HTTP Server", "Nginx", "XAMPP", "WAMP", "LAMP"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "SQL Server", "PostgreSQL", "phpMyAdmin", "Stored Procedures"]
    },
    {
      name: "API & Integration",
      skills: ["REST APIs", "Postman", "OpenAPI", "OAuth2", "JWT", "API Testing & Authentication"]
    },
    {
      name: "Version Control & DevOps",
      skills: ["GitLab", "Bitbucket", "SVN", "AWS", "Azure", "CI/CD", "Docker"]
    },
    {
      name: "Business Intelligence & AI Tools",
      skills: ["Power BI", "SSIS", "SSAS", "Azure OpenAI", "OpenAI", "Claude", "Google Antigravity", "Kiro"]
    },
    {
      name: "Development Tools & IDEs",
      skills: ["Visual Studio Code", "Visual Studio 2015", "Eclipse", "NetBeans", "Sublime Text"]
    },
    {
      name: "Project Management & Collaboration",
      skills: ["SharePoint", "OpenProject", "Agile Methodologies", "Sprint Planning", "Cross-Functional Team Collaboration"]
    },
    {
      name: "Methodologies",
      skills: ["SDLC", "Object-Oriented Programming (OOP)", "Agile", "Scrum", "Design Patterns", "Code Reviews", "Unit Testing", "Technical Documentation"]
    },
    {
      name: "Application Support",
      skills: ["Troubleshooting", "Root Cause Analysis", "Performance Optimization", "Production Support"]
    },
    {
      name: "Domain Expertise",
      skills: ["Aerospace Software", "Satellite Telemetry Systems", "Real-Time Data Dashboards", "Healthcare Web Applications"]
    },
    {
      name: "Soft Skills",
      skills: ["Problem Solving", "Critical Thinking", "Communication", "Leadership", "Time Management", "Attention to Detail", "Multi-Project Management"]
    }
  ];

  return (
    <div className="container py-5">
      <div className="section-header text-center mb-5">
        <h2 className="display-4 fw-bold"><span className="gold">My Skills</span></h2>
        <p className="text-muted">Technologies, frameworks, and tools I specialize in</p>
      </div>

      <div className="row g-4">
        {categories.map((cat, index) => (
          <div key={index} className="col-md-6">
            <div className="card h-100 accomplishment-card border-0 shadow">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4 gold">{cat.name}</h4>
                <div className="d-flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="tech-badge" style={{ fontSize: '0.9rem', padding: '6px 12px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}