import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';

const backdrop = {
  visible: {opacity:1},
  hidden: {opacity:0},
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8
    }
  }
}

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0.2
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: "spring"
    }
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.7,
      type: "spring"
    }
  }
}

const Modal = ({showModal, setShowModal})=>{
  
  
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div className="backdrop" 
          variants={backdrop} 
          initial="hidden" 
          animate="visible"
          exit="exit"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again?</button>
            </Link>
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;