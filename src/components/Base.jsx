import React from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

const containerVariants = {
  hidden:{x:'100vw'},
  visible:{
    x:0,
    transition:{
      // delay:0.6, 
      type:"spring", 
      stiffness:120, 
      bounce:0.3,
      when: "beforeChildren"
    }
  },
  exit: {
    x: "110vw",
    transition: {
      duration: 0.4
    }
  }
}

const nextVariants = {
  hidden: {x:'-310vw'},
  exit: {
    x:'110vw',
    transition:{
      delay: 0.2,
      duration: 0.8
    }
  },
  visible: {
    x:0,
    transition: {
      type:'spring',
      delay: 0.6,
      stiffness:110, 
      damping:13,
      duration:1
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.7,
      yoyo: Infinity
    }
  }
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const clickHandler = base=>{
    pizza.base===base ? addBase("") : addBase(base)
  }
  
  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base} 
              onClick={() => clickHandler(base)}
              whileHover={{
                scale:1.3,
                originX:0,
                color: "#f8e112"
              }}
              transition={{
                type:"spring",
                stiffness:150
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>
      
      <AnimatePresence>
      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Link to="/toppings">
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}
      </AnimatePresence>

    </motion.div>
  )
}

export default Base;