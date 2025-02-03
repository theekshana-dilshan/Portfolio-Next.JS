import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <h1 className="hero-title">Hi my name is</h1>
        <h2 className="hero-title-large">Theekshana Dilshan</h2>
        <h3 className="hero-title-sub">
            I craft things for web.
        </h3>
        <p className="hero-text">
            I&apos;m a software engineer with expertise in creating top-notch digital
            experiences. My current focus is on developing products that are
            accessible and centerd around user needs, as part of the team at&nbsp;
            <Link href="https://www.ijse.lk/" target='_blank' className='link'>
                IT Solutions
            </Link>
        </p>
        <div className="hero-button">
            <Button text="Check out my projects" link="https://github.com/theekshana-dilshan"/>
        </div>
    </div>
  )
}

export default Hero