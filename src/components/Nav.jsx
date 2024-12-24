import React from 'react'
import { Orbitron } from "next/font/google";
import Link from 'next/link';
import { DropDownMenu } from '@/components/DropDrownMenu';
import { GiPistolGun } from "react-icons/gi";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
});

const Nav = () => {
  return (
    <section className=' flex max-w-7xl mx-auto justify-between p-10 sticky z-50'>
      <div className={`${orbitron.className} text-2xl`}>
        <Link href="/">
        <div className='flex items-center justify-center gap-1'>
          <h1 className=''>CS2</h1>
          <GiPistolGun className='text-3xl' />
        </div>
        <span className= 'text-indigo-500'>PRAC</span>
        </Link>
      </div>
      <div>
        <DropDownMenu/>
      </div>
    </section>
  )
}

export default Nav
