import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden:{x:'100vw'},
  visible:{
    x:0,
    transition:{
      // delay:0.5, 
      type:"spring", 
      stiffness:120, 
      bounce:0.3,
      damping:12,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.4
    }
  }
}

const childVariant = {
  hidden:{
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  
  useEffect(()=>{
    let timeout = setTimeout(()=>setShowModal(true), 5000)
    
    return ()=>clearTimeout(timeout);
  }, [setShowModal])
  
  
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div key={topping} variants={childVariant} >{topping}</motion.div>)}
      
    </motion.div>
  )
}

export default Order;