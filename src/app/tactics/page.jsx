"use client"
import React from 'react'
import Card from '@/components/Card'
import { cardTactics } from '@/constants'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ['900']
});

const page = () => {
  return (
    <main className={`${orbitron.className} text-center items-center h-screen max-w-7xl mx-auto px-10 `}>
      <div className='my-10 md:my-20 lg:my-32'>
        <h1 className='font-bold text-3xl md:text-6xl lg:text-7xl tracking-wider mb-5 '> {cardTactics.cardTitle}</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 '>
        <Card
        href="/tactics/ancient"
        imageSrc='/ancient.jpg' 
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title}
        />
        <Card
        href="/tactics/anubis"
        imageSrc='/anubis.jpg'
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title1}
        />
        <Card
        href="/tactics/dust2"
        imageSrc='/dust2.jpg'
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title2}
        />
        <Card
        href="/tactics/inferno"
        imageSrc='/inferno.webp'
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title3}
        />
        <Card
        href="/tactics/mirage"
        imageSrc='/mirage.jpg'
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title4}
        />
        <Card
        href="/tactics/nuke"
        imageSrc='/nuke.png'
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title5}
        />
        <Card
        href="/tactics/vertigo"
        imageSrc='/vertigo.webp'
        videoSrc="/DEATHMATCH.mp4"
        title={cardTactics.title6}
        />
      </div>
    </main>
  )
}

export default page
