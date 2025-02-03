import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <h1 className="hero-title">Hi my name is</h1>
        <h2 className="hero-title-image">Theekshana Dilshan</h2>
        <h3 className="hero-title-large hero-title-sub">
            I craft things for web.
        </h3>
        <p className="hero-text">
            I&apos;m a software engineer with expertise in creating top-notch digital
            experiences. My current focus is on developing products that are
            accessible and centerd around user needs, as part of the team at
            <Link href="" target='_blank' className='link'>
                IJSE
            </Link>
        </p>
    </div>
  )
}

export default Hero