// src/sections/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './sections.css';
import './projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Eyes On Wheels',
      description: 'IoT-based drowsiness detection system for enhanced road safety. Integrates Computer Vision algorithms to detect drowsiness using OpenCV on Raspberry Pi hardware for real-time detection. Secured INR 35,000 grant under SSIP.',
      image: '/images/projects/eyes-on-wheels.png',
      category: ['IoT', 'Machine Learning', 'Computer Vision'],
      link: '#',
      github: 'https://github.com/samarthdumasia'
    },
    {
      id: 2,
      title: "Mute's Speaker",
      description: 'Innovative IoT project enabling mute individuals to communicate through real-time hand sign recognition. Developed gesture recognition system using computer vision algorithms for text-to-speech conversion.',
      image: '/images/projects/mutes-speaker.jpeg',
      category: ['IoT', 'Computer Vision', 'Machine Learning'],
      link: '#',
      github: 'https://github.com/samarthdumasia'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description: 'Full-stack inventory management web application built with React and Tailwind CSS. Features robust RESTful APIs using Express.js and Node.js with MongoDB database integration.',
      image: '/images/projects/inventory-system.jpeg',
      category: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/samarthdumasia'
    },
    {
      id: 4,
      title: 'Smart Home Monitoring System',
      description: 'IoT-based home automation system enabling remote monitoring and control of lighting, gas/smoke sensors, and voice-activated devices. Integrated with Arduino IoT Cloud for real-time visualization.',
      image: '/images/projects/smart-home.jpeg',
      category: ['IoT', 'Arduino', 'Cloud'],
      link: '#',
      github: 'https://github.com/samarthdumasia'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills, built with React and modern web technologies.',
      image: '/images/projects/personal-portfolio.jpg',
      category: ['node', 'mongodb'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Chat Bot',
      description: 'Real-time chat Bot with private messaging using OpenAI API.',
      image: '/images/projects/chat-application.jpeg',
  category: ['react', 'node'],
      link: '#',
      github: '#'
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.flatMap(project => project.category).filter(cat => cat !== 'socket'))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

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
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.category.filter(cat => cat !== 'socket').map(cat => (
                    <span key={cat} className="project-tag">
                      {cat}
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