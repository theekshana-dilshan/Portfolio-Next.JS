import Link from 'next/link'
import React from 'react'

function Email() {
  return (
    <div className='email'>
        <Link href="mailto:sptheekshanadilshan@gmail.com" className='email-link'>
            sptheekshanadilshan@gmail.com
        </Link>
    </div>
  )
}

export default Email