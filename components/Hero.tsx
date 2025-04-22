'use client'

import { useState, useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Hero() {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm Mike Munene.`,
      "Coffee Enthusiast & Passionate Coder",
      "<ButCodeIsMyTruePassion />"
    ],
    loop: true,
    delaySpeed: 2000
  })

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <div className='h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <BackgroundCircles />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-20 flex flex-col items-center"
      >
        <div className="relative mb-8 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
          <img 
            className='relative rounded-full h-36 w-36 mx-auto object-cover border-2 border-white/10 shadow-lg'
            src="https://i.postimg.cc/SRXwbFcb/1704874858832.jpg"
            alt="Mike Munene"
          />
        </div>

        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px] font-medium'>
            Software Engineer
          </h2>
          
          <h1 className='text-4xl lg:text-5xl font-light px-10 text-white'>
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#f7A80A' />
          </h1>

          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            {['About', 'Experience', 'Skills', 'Projects'].map((item) => (
              <Link href={`#${item.toLowerCase()}`} key={item}>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(247, 168, 10, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-2 border border-gray-500 rounded-full uppercase text-xs tracking-widest text-gray-300 transition-all hover:border-[#f7A80A]/40 hover:text-[#f7A80A]/40'
                >
                  {item}
                </motion.button>
              </Link>
            ))}
          </div>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="#contact">
              <button className='bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 rounded-lg text-black font-medium shadow-md hover:shadow-xl transition-all hover:scale-105'>
                Let&apos;s Talk
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
