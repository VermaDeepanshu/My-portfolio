import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Bluestocks Website",
      description: "A dynamic full-stack platform for Bluestocks startup that introduces the company and highlights its role in financial markets. Built with MERN stack for seamless user experience.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/VermaDeepanshu?tab=repositories",
      live: "https://github.com/VermaDeepanshu?tab=repositories",
      featured: true,
      status: "Live Demo"
    },
    {
      title: "Go with Ease",
      description: "HackMol 5.0 First Runner-up project: A real-time train booking alert system using Railway APIs. Built full-stack solution with email notifications for seat availability.",
      image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Railway APIs"],
      github: "https://github.com/VermaDeepanshu?tab=repositories",
      live: "https://github.com/VermaDeepanshu?tab=repositories",
      featured: true,
      status: "Winner - HackMol 5.0"
    },
    {
      title: "Insider Jobs (On Going)",
      description: "A comprehensive job portal enabling users to browse, post, and apply through a seamless interface. Integrated ClerkAuth for secure authentication and role-based dashboards.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "Express.js", "ClerkAuth", "TailwindCSS"],
      github: "https://github.com/VermaDeepanshu?tab=repositories",
      live: "https://github.com/VermaDeepanshu?tab=repositories",
      featured: true,
      status: "In Development"
    }
  ]

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

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>

          <motion.div className="projects-intro" variants={itemVariants}>
            <p>
              Here are some of my recent projects that showcase my skills in full-stack development, 
              API integration, and problem-solving. Each project represents a unique challenge 
              and demonstrates different aspects of modern web development.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        className="project-link" 
                        aria-label="View Code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live} 
                        className="project-link" 
                        aria-label="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <FaStar />
                      Featured
                    </div>
                  )}
                  <div className="status-badge">
                    {project.status}
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.github} 
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode />
                      View Code
                    </a>
                    <a 
                      href={project.live} 
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <h3>Want to see more?</h3>
            <p>Check out my GitHub profile for more projects and contributions to open source.</p>
            <a 
              href="https://github.com/VermaDeepanshu?tab=repositories" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .projects-intro p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: var(--secondary-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
          position: relative;
        }

        .project-card.featured {
          border-color: var(--accent-color);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
        }

        .project-card:hover {
          box-shadow: var(--shadow-secondary);
          border-color: var(--accent-color);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--accent-color);
          color: var(--primary-color);
          border-radius: 50%;
          text-decoration: none;
          transition: var(--transition);
        }

        .project-link:hover {
          transform: scale(1.1);
          background: var(--accent-secondary);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--gradient-accent);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent-secondary);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(0, 212, 255, 0.1);
          color: var(--accent-color);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .project-actions .btn {
          flex: 1;
          justify-content: center;
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
        }

        .projects-cta {
          text-align: center;
          background: var(--secondary-color);
          padding: 3rem 2rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .projects-cta h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }

        .projects-cta p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-actions {
            flex-direction: column;
          }

          .projects-cta {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects