import React from 'react'
import './ExperienceComp.css'
import { motion } from "framer-motion";

const ExperienceComp = (props) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="years-sec"
    >
      <h1 className='year'>{props.year}</h1>
      <p className='des'>{props.des}</p>
    </motion.div>
  )
}

export default ExperienceComp