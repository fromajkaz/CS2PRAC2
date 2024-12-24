import React, { useState } from 'react'
import { navigation } from '../constants'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 w-full z-50 px-10 py-10'>
      <div className='flex items-center justify-center max-w-lg mx-auto bg-slate-950/30 p-4 rounded-2xl backdrop-blur-lg'>
        
        <div className='space-x-8'>
          {navigation.map((link,index) => (
            <a className=' text-white transition duration-300 hover:text-stone-400' key={index} href={link.url}onClick={handleLinkClick} >{link.title}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
