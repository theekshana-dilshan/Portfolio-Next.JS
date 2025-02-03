import Email from '@/components/Email'
import SocialIcons from '@/components/SocialIcons'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import React from 'react'

function Index() {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <SocialIcons/>
      <Email/>
    </div>
  )
}

export default Index