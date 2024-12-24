import React from 'react'
import { hero } from '@/constants'
import { MdArrowOutward } from "react-icons/md";

import { Orbitron } from "next/font/google";
import Link from 'next/link';
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
});

// flex items-center text-center max-w-7xl mx-auto justify-center h-screen p-10
const Homepage = () => {
  return (
    <main className={`${orbitron} text-center items-center flex`} >
    <div className='mt-10'>
      <p className='text-base text-customGray tracking-widest mb-3'>{hero.smallTitle}</p>
      <h1 className='font-bold text-3xl md:text-6xl lg:text-7xl tracking-wider mb-5'>{hero.title} <span className={`${orbitron.className} text-indigo-500 uppercase`}>{hero.titleSpan}</span></h1>
      <p className='text-base text-customGray tracking-widest mb-10'>{hero.subtitle}</p>
      <Link href="/pick">      
        <button className='py-5 px-10 bg-[#161a31] w-[400px] mx-auto flex items-center justify-center rounded-md gap-2 hover:bg-black duration-700 transition-all'>{hero.button} <MdArrowOutward /></button>
      </Link>
    </div>
  </main>
  )
}

export default Homepage
