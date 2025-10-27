// src/sections/Experience.jsx
import './sections.css';

const Experience = () => {
  const experiences = [
    {
      title: "IoT Tech Lead",
      company: "Google Development Group (GDG)",
      location: "P.P. Savani University",
      period: "2024 - 2025",
      responsibilities: [
        "Lead and mentor 10+ peers in IoT development projects",
        "Organize workshops and technical sessions on IoT technologies",
        "Provide technical guidance on embedded systems and IoT protocols"
      ]
    },
    {
      title: "Project Team Leader",
      company: "Eyes On Wheels Project",
      location: "P.P. Savani University",
      period: "2024",
      responsibilities: [
        "Led cross-functional team of 5 members in IoT-based safety solution",
        "Managed project timeline and secured funding of INR 35,000",
        "Coordinated with university administration and stakeholders"
      ]
    },
    {
      title: "Active Member",
      company: "Entrepreneur Business Club (EBC)",
      location: "P.P. Savani University",
      period: "2023 - Present",
      responsibilities: [
        "Contributing to 2 startup projects focused on technology innovation",
        "Collaborate with entrepreneurial teams on business development",
        "Participate in networking events and workshops"
      ]
    }
  ];

  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p className="timeline-date">{experience.period}</p>
              <p>
                {experience.responsibilities.map((resp, idx) => (
                  <span key={idx}>{resp}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;