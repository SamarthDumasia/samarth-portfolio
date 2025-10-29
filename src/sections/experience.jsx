// src/sections/Experience.jsx
import './sections.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>IoT Tech Lead</h3>
            <h4>Google Development Group (GDG), P.P. Savani University</h4>
            <p className="timeline-date">2024 - 2025</p>
            <p>
              • Lead and mentor 10+ peers in Internet of Things (IoT) development projects
              • Organize workshops and technical sessions on IoT technologies
              • Provide technical guidance on embedded systems and IoT protocols
            </p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Project Team Leader</h3>
            <h4>Eyes On Wheels Project</h4>
            <p className="timeline-date">2024 - 2025</p>
            <p>
              • Led cross-functional team of 5 members in developing IoT-based safety solution
              • Managed project timeline, resource allocation, and stakeholder communication
              • Secured funding of INR 35,000 under Student Startup and Innovation Policy (SSIP)
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Active Member</h3>
            <h4>Entrepreneur Business Club (EBC), P.P. Savani University</h4>
            <p className="timeline-date">2024 - Present</p>
            <p>
              • Actively contributing to 2 startup projects focused on technology innovation
              • Collaborate with entrepreneurial teams on business development
              • Participate in networking events and business development workshops
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;