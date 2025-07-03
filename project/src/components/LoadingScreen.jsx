import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">Deepanshu</span>
          <span className="logo-dot">.</span>
        </motion.div>
        
        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Crafting digital experiences...
        </motion.p>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-content {
          text-align: center;
          max-width: 300px;
        }

        .loading-logo {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
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

        .loading-bar {
          height: 3px;
          background: var(--gradient-accent);
          border-radius: 2px;
          margin-bottom: 1rem;
        }

        .loading-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>
    </motion.div>
  )
}

export default LoadingScreen