// src/sections/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "Eyes On Wheels - IoT Drowsiness Detection",
      description: "Led development of IoT-based drowsiness detection system for road safety. Integrated sensors with ML and computer vision for real-time detection. Secured INR 35,000 SSIP grant.",
      image: "/images/projects/eyes-on-wheels.jpg",
      tags: ["IoT", "ML", "Computer Vision", "Arduino"],
      github: "https://github.com/samarthdumasia/eyes-on-wheels",
      live: "#"
    },
    {
      title: "Mute's Speaker - Sign Language Translator",
      description: "Engineered real-time hand sign recognition system enabling communication for mute individuals. Implemented computer vision algorithms for gesture-to-speech translation.",
      image: "/images/projects/mutes-speaker.jpg",
      tags: ["Computer Vision", "IoT", "ML", "Python"],
      github: "https://github.com/samarthdumasia/mutes-speaker",
      live: "#"
    },
    {
      title: "Smart Home Monitoring System",
      description: "Developed IoT-based home automation system with remote monitoring, voice control via Alexa/Google Assistant, and MQTT integration through Arduino IoT Cloud.",
      image: "/images/projects/smart-home.jpg",
      tags: ["IoT", "Arduino Cloud", "MQTT", "Automation"],
      github: "https://github.com/samarthdumasia/smart-home",
      live: "#"
    },
    {
      title: "Inventory Management System",
      description: "Full-stack web application using React, Tailwind CSS, Express.js, Node.js, and MongoDB. Implemented RESTful APIs and responsive UI design.",
      image: "/images/projects/inventory.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/samarthdumasia/inventory-manager",
      live: "#"
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Projects</h2>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;