import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-grid">
        {/* Left Column: Greeting and Resume */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hello-line">Hello,</span>
            <span className="name-line gold">Vidhya Shanmugam</span>
          </h1>
          <h3 className="hero-subtitle">I'm a Software Engineer</h3>
          <a href="/resume.pdf" download className="resume-btn">
            Resume <FaDownload className="download-icon" />
          </a>
        </div>

        {/* Center Column: Portrait Image */}
        <div className="hero-center">
          <div className="profile-wrapper">
            <img src="/profile.jpg" className="profile-img" alt="Vidhya Shanmugam Profile Photo" />
          </div>
        </div>

        {/* Right Column: Detailed Bio & Socials */}
        <div className="hero-right">
          <p className="bio-paragraph">
            With a Master’s degree in Computer Applications from Bharathiar University and a Bachelor’s degree in Computer Applications from Avinashilingam University and I bring a strong foundation in software development, system design, and full-stack engineering. With over 8 years of professional experience, I am currently working as an IT Developer at Vosyn, where I contribute to building and maintaining scalable backend systems and applications using Node.js, Python, and PostgreSQL. My role involves designing efficient APIs, developing backend services, and collaborating with cross-functional teams to deliver reliable and high-performance solutions. Previously, I have worked across healthcare and aerospace domains, including my tenure at the Indian Space Research Organisation (ISRO), where I contributed to mission-critical systems involving satellite telemetry, real-time launch support tools, and large-scale data processing platforms. I have developed and delivered enterprise applications, interactive dashboards, and data-driven systems using modern web and backend technologies. In addition, I have integrated OpenAI models to automate AR training evaluation processes, improving accuracy and operational efficiency. My experience has strengthened my expertise in scalable architectures, database optimization, CI/CD pipelines, and Agile development practices. Driven by curiosity and continuous learning, I enjoy solving complex engineering challenges, optimizing system performance, and building impactful user experiences in fast-paced environments.
          </p>
          <p className="highlight-text">
            Committed to learning, adaptability, and impact. 🎯
          </p>
          <div className="social-section">
            <span className="social-label">Connect with me on:</span>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vidhyashanmugam/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Vidhyashanmugam24" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:vidhyasunmugam@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
