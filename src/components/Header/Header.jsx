"use client"
import React, { useState,useEffect } from 'react'
import { Orbitron } from "next/font/google";
import Link from 'next/link';
import { GiPistolGun } from "react-icons/gi";
import Nav from '../Nav/index'
import { motion,AnimatePresence } from 'framer-motion';
import styles from '../Header/style.module.scss'

  const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
  });

  const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
    <section className='flex max-w-7xl mx-auto items-center justify-between p-10 sticky z-50 '>
      <div className={`${orbitron.className} text-2xl`}>
        <Link  href="/">
        <span className='text-xs opacity-50 '>beta</span>
        <div className='flex items-center justify-center gap-1'>
          <h1 className=''>CS2</h1>
          <GiPistolGun className='text-3xl' />
        </div>
        <span className= 'tracking-widest text-indigo-500'>PRAC</span>
        </Link>
      </div>
        
      <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
        <AnimatePresence mode="wait">
        {isActive && <Nav />}
        </AnimatePresence>
    </section>
    </>
  )
}

export default Header
