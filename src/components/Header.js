import React from 'react';
import { motion } from 'framer-motion';


const SVG_VARIANTS = {
  hidden: {
    opacity: 0,
    rotate: -250
  },
  visible: {
    opacity: 1,
    rotate: 0
  }
}


const PATH_VARIANTS = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 0.5, duration: 1 }
  }
}
const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={1}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={SVG_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={PATH_VARIANTS}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={PATH_VARIANTS}
          />
        </motion.svg>
      </motion.div>
      <motion.div className="title"
        initial={{ y: "-20vh" }}
        animate={{ y: 10 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header >
  )
}

export default Header;