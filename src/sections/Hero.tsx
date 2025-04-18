import Button from '@/components/Button'
import React from 'react'
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className='hero'>
        <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.6,
            }}
        >Hi my name is</motion.h1>
        <motion.h2
            className="hero-title-large"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.75,
            }}
        >Theekshana Dilshan</motion.h2>
        <motion.h3
            className="hero-title-large hero-title-sub"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.05,
            }}
        >
            Software Engineer Student.
        </motion.h3>
        <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.35,
            }}
        >
            I am a passionate and driven software engineering student with a strong interest in exploring the vast realms of technology and innovation. 
            As a proactive learner and dedicated team player, I am committed to driving technological advancements and consistently striving for excellence in every endeavor.
        </motion.p>
        <motion.div
            className="hero-button"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.65,
            }}
        >
            <Button text="Check out my projects" link="https://github.com/theekshana-dilshan"/>
        </motion.div>
    </div>
  )
}

export default Hero