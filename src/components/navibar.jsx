import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './navibar.css';

const NAV_LINKS = [
  { label: 'Home', key: 'home', prop: 'scrollToHome' },
  { label: 'About', key: 'about', prop: 'scrollToAbout' },
  { label: 'Education', key: 'education', prop: 'scrollToEducation' },
  { label: 'Experience', key: 'experience', prop: 'scrollToExperience' },
  { label: 'Projects', key: 'projects', prop: 'scrollToProjects' },
  { label: 'Contact', key: 'contact', prop: 'scrollToContact' },
];

const Navibar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      // Close menu on scroll for better UX
      setIsMenuOpen(false);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close mobile menu when switching to desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (key, callback) => {
    setActive(key);
    if (callback) callback();
  };

  const handleNavLinkClick = (key, callback) => {
    handleNavClick(key, callback);
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className={`navibar${scrolled ? ' scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`} aria-label="Main Navigation">
      <div className="navibar-content">
        <div className="navibar-title" tabIndex={0} role="button" aria-label="Go to Home" onClick={() => handleNavLinkClick('home', props.scrollToHome)}>
          Samarth Portfolio
        </div>
        
        {isMobile && (
          <button 
            className={`menu-toggle${isMenuOpen ? ' active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <AnimatePresence>
          {(!isMobile || isMenuOpen) && (
            <motion.div 
              className="nav-menu"
              initial={isMobile ? { opacity: 0, y: -20 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={isMobile ? { opacity: 0, y: -20 } : false}
              transition={{ duration: 0.2 }}
            >
              {NAV_LINKS.map(link => (
                <button
                  key={link.key}
                  className={`nav-link${active === link.key ? ' active' : ''}`}
                  onClick={() => handleNavLinkClick(link.key, props[link.prop])}
                  aria-current={active === link.key ? 'page' : undefined}
                  tabIndex={0}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isMobile && isMenuOpen && (
        <motion.div 
          className="menu-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navibar; 
