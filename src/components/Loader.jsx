import React, {useEffect} from 'react';
import  { motion, useCycle } from 'framer-motion';


const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },
  animationTwo: {
    x: [20, -20],
    y: [0, 20],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
}

const Loader = ()=>{
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  
  useEffect(()=>{
    let myInterval = setInterval(()=>cycleAnimation(), 1000);
    return ()=>clearInterval(myInterval)
  }, [])
  
  return (
    <>
    <motion.div className="loader" 
      variants={loaderVariants}
      animate={animation}
    >
      
    </motion.div>
    </>
  
  );
}

export default Loader;