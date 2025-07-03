import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaRocket, FaBrain, FaUsers } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const values = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to solve complex problems."
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to tackle challenging technical requirements."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Working effectively in teams and contributing to open-source communities."
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-block">
                <h3>Computer Science Engineering Student</h3>
                <p>
                  I'm a dedicated Computer Science Engineering student at Dr. B R Ambedkar National Institute 
                  of Technology, Jalandhar, with an impressive 8.21 CGPA. My journey in technology has been 
                  focused on building scalable, user-centric applications and exploring cutting-edge technologies.
                </p>
              </div>

              <div className="text-block">
                <h3>My Approach</h3>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  industry trends. Whether it's developing full-stack applications, implementing machine learning 
                  solutions, or contributing to open-source projects, I approach each challenge with 
                  enthusiasm and attention to detail.
                </p>
              </div>

              <div className="achievements">
                <div className="achievement">
                  <span className="achievement-title">HackMol 5.0 Winner</span>
                  <span className="achievement-desc">First Runner-up with real-time train booking alert system</span>
                </div>
                <div className="achievement">
                  <span className="achievement-title">Academic Excellence</span>
                  <span className="achievement-desc">Maintaining 8.21 CGPA at NIT Jalandhar</span>
                </div>
                <div className="achievement">
                  <span className="achievement-title">MERN Stack Developer</span>
                  <span className="achievement-desc">Certified full-stack developer with multiple projects</span>
                </div>
                <div className="achievement">
                  <span className="achievement-title">Leadership & Community</span>
                  <span className="achievement-desc">Team Cultural Affairs member and peer engagement leader</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-values" variants={itemVariants}>
              <h3>What Drives Me</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="value-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          space-y: 2rem;
        }

        .text-block {
          margin-bottom: 2rem;
        }

        .text-block h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }

        .text-block p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .achievements {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .achievement {
          padding: 1rem;
          background: var(--secondary-color);
          border-radius: var(--border-radius);
          border-left: 4px solid var(--accent-color);
        }

        .achievement-title {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .achievement-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .about-values h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .value-card {
          background: var(--secondary-color);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }

        .value-card:hover {
          border-color: var(--accent-color);
          box-shadow: var(--shadow-secondary);
        }

        .value-icon {
          font-size: 2rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
        }

        .value-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .value-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .achievements {
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About