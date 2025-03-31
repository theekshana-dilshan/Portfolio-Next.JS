import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <motion.div
        className="about"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
        }}
    >
        <div className='title'>
            <h2>About Me</h2>
        </div>
        <div className='about-grid'>
            <div className='about-grid-info'>
                <p className='about-grid-info-text'>
                    I am a passionate and driven software engineering student with a strong interest in exploring the vast realms of technology and innovation. 
                    As a proactive learner and dedicated team player, I am committed to driving technological advancements and consistently striving for excellence in every endeavor.
                </p>
                <p className='about-grid-info-text'>
                    I am curruntly studing software engineering at IJSE - institute of software engineering. 
                    My all project are available at my&nbsp;
                    <Link href="https://github.com/theekshana-dilshan" className='link' target='_blank'>git hub</Link>
                </p>
                <p className='about-grid-info-text'>
                    Here are a few technologies I have been working with recently:
                </p>
                <ul className='about-grid-info-list'>
                    <li className='about-grid-info-list-item'>React</li>
                    <li className='about-grid-info-list-item'>React Native</li>
                    <li className='about-grid-info-list-item'>Next.js</li>
                    <li className='about-grid-info-list-item'>Typescript</li>
                    <li className='about-grid-info-list-item'>Redux toolkit</li>
                    <li className='about-grid-info-list-item'>Node.js</li>
                    <li className='about-grid-info-list-item'>Tailwind CSS</li>
                    <li className='about-grid-info-list-item'>CSS</li>
                </ul>
            </div>
            <div className='about-grid-photo'>
                <div className='overlay'></div>
                <div className='overlay-border'></div>
                <div className='about-grid-photo-container'>
                    <Image src="/profile.jpg" alt='profile' fill></Image>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About