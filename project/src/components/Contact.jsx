import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, 
  FaGithub, FaTwitter, FaPaperPlane, FaUser, FaComment 
} from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'deepanshubohra@gmail.com',
      link: 'mailto:deepanshubohra@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 6281554403',
      link: 'tel:+916281554403'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'NIT Jalandhar, Punjab, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/Deepanshu',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Deepanshu',
      color: '#333'
    },
    {
      icon: <FaTwitter />,
      name: 'Portfolio',
      url: '#',
      color: '#1DA1F2'
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
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Let's Work Together
          </motion.h2>

          <motion.div className="contact-intro" variants={itemVariants}>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hello, 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Get In Touch</h3>
              
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="availability">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for opportunities</span>
                </div>
                <p>Currently seeking internship opportunities and open to freelance projects.</p>
              </div>
            </motion.div>

            <motion.div className="contact-form-section" variants={itemVariants}>
              <h3>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FaComment />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FaComment />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-intro {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .contact-intro p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3,
        .contact-form-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--secondary-color);
          border-radius: var(--border-radius);
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }

        .contact-method:hover {
          border-color: var(--accent-color);
          box-shadow: var(--shadow-secondary);
        }

        .contact-icon {
          font-size: 1.2rem;
          color: var(--accent-color);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 50%;
        }

        .contact-details h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .contact-details p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .social-section {
          margin-bottom: 2rem;
        }

        .social-section h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: var(--secondary-color);
          color: var(--text-secondary);
          border-radius: 50%;
          text-decoration: none;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 1.2rem;
        }

        .social-link:hover {
          background: var(--social-color);
          color: white;
          border-color: var(--social-color);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .availability {
          padding: 1.5rem;
          background: rgba(0, 212, 255, 0.1);
          border-radius: var(--border-radius);
          border: 1px solid rgba(0, 212, 255, 0.3);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-indicator span {
          font-weight: 600;
          color: var(--accent-color);
        }

        .availability p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          background: var(--secondary-color);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius);
          color: var(--text-primary);
          font-size: 1rem;
          transition: var(--transition);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .submit-btn {
          align-self: flex-start;
          min-width: 150px;
          position: relative;
        }

        .submit-btn.submitting {
          pointer-events: none;
          opacity: 0.7;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .success-message {
          background: rgba(74, 222, 128, 0.1);
          color: #4ade80;
          padding: 1rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(74, 222, 128, 0.3);
          text-align: center;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .social-links {
            justify-content: center;
          }

          .submit-btn {
            align-self: stretch;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact