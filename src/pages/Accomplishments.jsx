export default function Accomplishments() {
  const certifications = [
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      year: "2026"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      year: "2024"
    },
    {
      title: "Introduction to Structured Query Language (SQL)",
      issuer: "IBM",
      year: "2024"
    },
    {
      title: "SQL: A Practical Introduction for Querying Databases",
      issuer: "IBM",
      year: "2023"
    },
    {
      title: "Bootstrap 5 Tutorial",
      issuer: "W3Schools",
      year: "2023"
    },
    {
      title: "Building Web Applications in PHP",
      issuer: "University of Michigan",
      year: "2022"
    }
  ];

  return (
    <div className="container py-5">
      <div className="section-header text-center mb-5">
        <h2 className="display-4 fw-bold"><span className="gold">Certifications</span></h2>
        <p className="text-muted">Professional credentials and specialized achievements</p>
      </div>

      <div className="row g-4">
        {certifications.map((cert, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 accomplishment-card border-0 shadow">
              <div className="card-body d-flex flex-column p-4">
                <span className="badge align-self-start mb-3">{cert.year}</span>
                <h4 className="card-title fw-bold mb-2">{cert.title}</h4>
                <p className="card-text text-muted flex-grow-1 mb-0">Issued by: <strong>{cert.issuer}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
