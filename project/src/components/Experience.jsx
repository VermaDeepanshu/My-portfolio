import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Technology',
      company: 'Dr. B R Ambedkar National Institute of Technology, Jalandhar',
      period: 'Aug 2023 - May 2027',
      description: 'Computer Science and Engineering with focus on Data Structures and Algorithms (DSA), Object-Oriented Programming (OOPS), and Database Management Systems (DBMS).',
      achievements: [
        'CGPA: 8.21/10',
        'Specialized in Full Stack Development',
        'Active member of coding communities',
        'Winner of HackMol 5.0 hackathon'
      ]
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'Bluestocks (Startup India)',
      period: 'June 2025 - Present',
      description: 'Led end-to-end development of dynamic full-stack website for Bluestocks, utilizing MERN stack to deliver seamless user experience. Designed responsive UI components and backend integration.',
      achievements: [
        'Built full-stack platform with React.js, Node.js, Express.js, MongoDB',
        'Designed responsive UI with Tailwind CSS',
        'Implemented seamless integration with frontend',
        'Key Project: Bluestocks Website - Fully functional MERN application'
      ]
    },
    {
      type: 'work',
      title: 'Growth Manager Intern',
      company: 'Preplasta Prime ConnectUp',
      period: 'May 2025 - Present',
      description: 'Promoted Preplasta Prime to 40+ students and hosted campus sessions to boost platform awareness. Built and managed WhatsApp community of 20+ active members for seamless updates.',
      achievements: [
        'Management, Communication, Marketing, Leadership',
        'Promoted platform to 40+ students',
        'Built WhatsApp community of 20+ members',
        'Hosted campus awareness sessions'
      ]
    },
    {
      type: 'achievement',
      title: 'HackMol 5.0 Winner',
      company: 'National Level Hackathon',
      period: 'January 2024 - March 2025',
      description: 'First Runner-up: Built real-time train booking alert system using Railway APIs. Developed full-stack solution and sent email alerts to users.',
      achievements: [
        'First Runner-up among 200+ teams',
        'Built with JavaScript, Node.js, Express.js, MongoDB',
        'Implemented Railway APIs integration',
        'Led frontend using JavaScript and TailwindCSS'
      ]
    }
  ]

  const certifications = [
    {
      title: 'HackMol 5.0 - First Runner-up',
      issuer: 'National Hackathon',
      year: '2024',
      icon: <FaCertificate />
    },
    {
      title: 'MERN Stack Developer',
      issuer: 'Apna College',
      year: '2024',
      icon: <FaCertificate />
    },
    {
      title: 'Smart India Hackathon 2024',
      issuer: 'Government of India',
      year: '2024',
      icon: <FaCertificate />
    },
    {
      title: 'Pace Society Member',
      issuer: 'Campus Community',
      year: '2024',
      icon: <FaCertificate />
    }
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <FaBriefcase />
      case 'education':
        return <FaGraduationCap />
      case 'achievement':
        return <FaTrophy />
      default:
        return <FaBriefcase />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return '#00d4ff'
      case 'education':
        return '#ff6b6b'
      case 'achievement':
        return '#4ecdc4'
      default:
        return '#00d4ff'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience & Education
          </motion.h2>

          <div className="experience-content">
            <div className="timeline-section">
              <h3 className="subsection-title">Professional Journey</h3>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    variants={itemVariants}
                  >
                    <div className="timeline-marker" style={{ backgroundColor: getTypeColor(exp.type) }}>
                      {getIcon(exp.type)}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-title">{exp.title}</h4>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <p className="timeline-company">{exp.company}</p>
                      <p className="timeline-description">{exp.description}</p>
                      <ul className="timeline-achievements">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="certifications-section">
              <h3 className="subsection-title">Certifications & Achievements</h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certification-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="cert-icon">{cert.icon}</div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-color), var(--accent-secondary));
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 2rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
          z-index: 2;
        }

        .timeline-content {
          background: var(--secondary-color);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 20px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 10px 10px 0;
          border-color: transparent var(--secondary-color) transparent transparent;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .timeline-period {
          background: var(--accent-color);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .timeline-company {
          color: var(--accent-secondary);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-achievements {
          list-style: none;
          padding: 0;
        }

        .timeline-achievements li {
          color: var(--text-secondary);
          padding: 0.3rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .timeline-achievements li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
        }

        .certifications-grid {
          display: grid;
          gap: 1rem;
        }

        .certification-card {
          background: var(--secondary-color);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          transition: var(--transition);
        }

        .certification-card:hover {
          border-color: var(--accent-color);
          box-shadow: var(--shadow-secondary);
        }

        .cert-icon {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
        }

        .cert-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .cert-issuer {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .cert-year {
          background: var(--accent-secondary);
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline {
            padding-left: 1rem;
          }

          .timeline::before {
            left: 0.5rem;
          }

          .timeline-marker {
            left: -1.5rem;
            width: 1.5rem;
            height: 1.5rem;
            font-size: 0.7rem;
          }

          .timeline-item {
            padding-left: 1.5rem;
          }

          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .timeline-period {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience