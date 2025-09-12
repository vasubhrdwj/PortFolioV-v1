import React, { useState, useEffect } from 'react'
import heroBg from '../assets/heroBg.jpg'
import Navbar from './Navbar'


const phrases = [
  'A Software Engineer passionate about Web & Blockchain.',
  'A Competitive Programmer.',
  'A Gym Enthusiast.',
  'Always Learning & Building.'
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % phrases.length)
        setShow(true)
      }, 250)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center">
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-gray-950/90 -z-10" />


      <Navbar />
      
      <div className="relative z-10 px-6 md:ml-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Hi, I&apos;m Vasu.
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200">
          <span
            className={`transition-opacity duration-300 ${
              show ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {phrases[index]}
          </span>
        </h2>
      </div>
    </section>
  )
}

export default Hero
