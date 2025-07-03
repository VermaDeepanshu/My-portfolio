import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, 
  FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaAws 
} from 'react-icons/fa'
import { 
  SiMongodb, SiExpress, SiMysql, SiCplusplus, 
  SiTailwindcss, SiJupyter, SiPowerbi, SiRstudio 
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", icon: <SiCplusplus />, level: 90, color: "#00599C" },
        { name: "Python", icon: <FaPython />, level: 85, color: "#3776AB" },
        { name: "JavaScript", icon: <FaJs />, level: 95, color: "#F7DF1E" },
        { name: "HTML", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "#1572B6" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, level: 88, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, level: 85, color: "#000000" },
        { name: "Tailwind", icon: <SiTailwindcss />, level: 85, color: "#06B6D4" },
        { name: "Bootstrap", icon: <FaBootstrap />, level: 80, color: "#7952B3" }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "#47A248" },
        { name: "MySQL", icon: <SiMysql />, level: 80, color: "#4479A1" },
        { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
        { name: "GitHub", icon: <FaGitAlt />, level: 90, color: "#181717" }
      ]
    },
    {
      title: "Specialized Tools",
      skills: [
        { name: "Jupyter", icon: <SiJupyter />, level: 75, color: "#F37626" },
        { name: "Power BI", icon: <SiPowerbi />, level: 70, color: "#F2C811" },
        { name: "R Studio", icon: <SiRstudio />, level: 65, color: "#75AADB" },
        { name: "LeetCode", icon: <FaDatabase />, level: 80, color: "#FFA116" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Technical Skills
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <motion.div
                          className="skill-progress-bar"
                          style={{ backgroundColor: skill.color }}
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-card">
              <h3>Technical Expertise</h3>
              <p>
                Proficient in modern web technologies with a focus on creating scalable, 
                performant applications. Experienced in full-stack development with MERN stack, 
                with strong knowledge of data structures and algorithms.
              </p>
            </div>
            <div className="summary-card">
              <h3>Continuous Learning</h3>
              <p>
                Always staying updated with the latest industry trends and technologies. 
                Currently exploring advanced React patterns, microservices architecture, 
                and competitive programming on platforms like LeetCode.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-category {
          background: var(--secondary-color);
          padding: 2rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--accent-color);
          text-align: center;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
          transition: var(--transition);
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-icon {
          font-size: 1.2rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .skill-progress {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          border-radius: 2px;
          position: relative;
        }

        .skill-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .skills-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .summary-card {
          background: var(--secondary-color);
          padding: 2rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .summary-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--accent-color);
        }

        .summary-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .summary-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills