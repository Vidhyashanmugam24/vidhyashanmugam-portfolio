export default function Education() {
  const educations = [
    {
      title: "Master of Computer Applications (MCA)",
      details: "Bharathiar University, Coimbatore, India",
      period: "Jun 2014 - Apr 2016"
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      details: "Avinashilingam University, Coimbatore, India",
      period: "Jun 2011 - Nov 2014"
    }
  ];

  return (
    <div className="container py-5">
      <div className="section-header text-center mb-5">
        <h2 className="display-4 fw-bold"><span className="gold">Education</span></h2>
        <p className="text-muted">My academic qualifications and educational foundation</p>
      </div>

      <div className="timeline-container mx-auto" style={{ maxWidth: '800px' }}>
        {educations.map((edu, index) => (
          <div key={index} className="timeline-item d-flex mb-5 position-relative">
            <div className="timeline-dot"></div>
            <div className="timeline-content p-4 rounded shadow">
              <span className="timeline-period badge mb-2">{edu.period}</span>
              <h4 className="fw-bold mb-2">{edu.title}</h4>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                📍{edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
