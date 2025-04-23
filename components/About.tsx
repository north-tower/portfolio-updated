'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 flex flex-col justify-center max-w-7xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center w-full"
      >
        About
      </motion.h3>
      
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0 w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-96 rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src="https://i.postimg.cc/SRXwbFcb/1704874858832.jpg"
            alt="Mike Munene portrait"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl space-y-6 md:space-y-8"
        >
          <h3 className="text-3xl font-bold text-white">
            Here is a <span className="underline decoration-4 decoration-[#f7A80A]/70 pb-1">little</span> background
          </h3>
          
          <p className="text-lg text-gray-200 leading-relaxed">I am Mike Munene, a dedicated developer specializing in mobile and web applications with a bachelor&apos;s degree in mathematics and computer science. My expertise lies in JavaScript and TypeScript, utilizing frameworks such as React Native, Next.js, and React.js to create dynamic and responsive applications. With my strong academic foundation in mathematics and computer science, I bring analytical thinking and problem-solving skills to software development. While JavaScript/TypeScript and React technologies are my primary tools, I am versatile and adept at working with a variety of programming languages to meet the diverse needs of any project
        </p>
          
          <motion.div 
            className="pt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#skills">
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium rounded-lg transition-all duration-300 hover:shadow-xl">
                My Skills
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
