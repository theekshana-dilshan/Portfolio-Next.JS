import Link from 'next/link';
import React from 'react'
import{
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

function SocialIcons() {
    const socialLinks = [
        {
            name: "Github", 
            icon: <FiGithub/>, 
            link: "https://github.com/theekshana-dilshan",
        },
        {
            name: "LinkedIn", 
            icon: <FiLinkedin/>, 
            link: "https://www.linkedin.com/in/theekshana-dilshan-8496b2298/",
        },
        {
            name: "Instagram", 
            icon: <FiInstagram/>, 
            link: "https://github.com/theekshana-dilshan",
        },
        {
            name: "Twitter", 
            icon: <FiTwitter/>, 
            link: "https://github.com/theekshana-dilshan",
        },
    ];
  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {
                socialLinks.map(({name,icon,link})=>(
                    <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link' target='_blank'>
                            {icon}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialIcons