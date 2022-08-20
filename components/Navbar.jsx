import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <h3><a href="/">Finalix</a> </h3>
      <ul className='flex gap-12 cursor-pointer'>
        <Link href='/'>
        <li>Home</li>
        </Link>
        <Link href='/Services'>
        <li>Services</li>
        </Link>
        <Link href='/Experts'>
        <li>Experts</li>
        </Link>
        <Link href='/Contact'>
        <li>Contact</li>
        </Link>
        </ul>
      
    </nav>
  )
}

export default Navbar