import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Deepanshu_Resume_Final.pdf'
    link.download = 'Deepanshu_Verma_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      {/* Background Image with Blur */}
      <div className="hero-background">
        <img src="/image.jpg" alt="Deepanshu Verma" className="background-image" />
        <div className="background-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title">
              <span className="title-line">Hi, I'm</span>
              <span className="title-name">Deepanshu</span>
              <span className="title-role">Full Stack Developer & Software Engineer</span>
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Computer Science Engineering student at Dr. B R Ambedkar National Institute of Technology, Jalandhar. 
              Passionate about creating innovative solutions through modern web technologies with expertise in 
              MERN stack development and machine learning.
            </motion.p>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number">8.21</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2024</span>
                <span className="stat-label">Graduate</span>
              </div>
            </motion.div>

            <motion.div className="hero-actions" variants={itemVariants}>
              <button className="btn btn-primary" onClick={handleDownloadResume}>
                <FaDownload />
                Download Resume
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
            </motion.div>

            <motion.div className="hero-social" variants={itemVariants}>
              <a href="https://github.com/Deepanshu" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/Deepanshu" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:deepanshubohra@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .background-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(8px);
          opacity: 0.3;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          text-align: center;
          padding: 2rem 0;
        }

        .hero-text {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .title-line {
          display: block;
          color: var(--text-secondary);
          font-size: 0.6em;
          font-weight: 500;
        }

        .title-name {
          display: block;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        }

        .title-role {
          display: block;
          color: var(--accent-secondary);
          font-size: 0.5em;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-color);
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-social {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(26, 26, 26, 0.8);
          color: var(--text-secondary);
          border-radius: 50%;
          text-decoration: none;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: var(--accent-color);
          color: var(--primary-color);
          transform: translateY(-3px);
          box-shadow: var(--shadow-primary);
        }

        @media (max-width: 768px) {
          .hero-stats {
            gap: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            gap: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero