// src/sections/Education.jsx
import { motion } from 'framer-motion';
import './sections.css';

const Education = () => {
  return (
    <section className="education-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Education</h2>
        <div className="timeline">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Technology (B.Tech) in Computer Science Engineering</h3>
              <h4>P.P. Savani University, Surat, Gujarat</h4>
              <p className="timeline-date">Expected 2026 | CGPA: 7.07/10</p>
              <p>
                Relevant Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems,
                Software Engineering, Computer Networks, Operating Systems, Internet Of Things
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Certifications</h3>
              <h4>Professional Development</h4>
              <p className="timeline-date">2024 - 2025</p>
              <p>
                • Google Cloud Platform (GCP) Certification
                • Amazon Web Services (AWS) Certification
                • IoT Wireless and Cloud Computing - Yonsei University
                • Agile with Atlassian Jira
                • Python for Everybody - University of Michigan
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Btech - Computer Science Engineering</h3>
              <h4>P.P. Savani University</h4>
              <p className="timeline-date">2022 - 2026</p>
              <p>
                Currently pursuing a Bachelor of Technology in Computer Science Engineering from P.P. Savani University.
                Engaged in various projects and research activities related to software development and data science.
                Actively involved in coding competitions and hackathons to enhance my programming skills.
              </p>
            </div>
          </motion.div>
          
          <motion.div>
            {/* Add your content here */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;