import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">Deepanshu</span>
            <span className="logo-dot">.</span>
          </motion.div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.95);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          cursor: pointer;
        }

        .logo-text {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-dot {
          color: var(--accent-color);
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-item {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: var(--transition);
          position: relative;
        }

        .nav-item:hover,
        .nav-item.active {
          color: var(--accent-color);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: var(--accent-color);
          border-radius: 50%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--secondary-color);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }

          .nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .menu-toggle {
            display: block;
          }

          .nav-item {
            width: 100%;
            text-align: center;
            padding: 1rem;
          }
        }
      `}</style>
    </motion.header>
  )
}

export default Header