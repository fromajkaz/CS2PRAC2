"use client"
import Card from '@/components/Card'
import React from 'react'
import { card } from '@/constants'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
});


const page = () => {
  return (
    <main className={`${orbitron.className} text-center items-center `}>
      <div className='my-10 md:my-20 lg:my-32'>
        <h1 className='font-bold text-3xl md:text-6xl lg:text-7xl tracking-wider mb-5 '><span className={` text-indigo-500`}>{card.cardSubtitle}</span> {card.cardTitle}</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center h-auto gap-5  '>
        <Card
        href="/tactics"
        imageSrc='/dm.webp' 
        videoSrc="/DEATHMATCH.mp4"
        title={card.title}
        />
        <Card
        href="/grenade"
        imageSrc='/dm.webp'
        videoSrc="/DEATHMATCH.mp4"
        title={card.title1}
        />
        <Card
        href="/aim"
        imageSrc='/dm.webp'
        videoSrc="/DEATHMATCH.mp4"
        title={card.title2}
        />
      </div>
    </main>
  )
}

export default page
