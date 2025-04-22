'use client'

import { useEffect, useRef } from 'react'

function About() {
  const imageRef = useRef(null)
  const textRef = useRef(null)
  
  useEffect(() => {
    // Simple intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (imageRef.current) observer.observe(imageRef.current)
    if (textRef.current) observer.observe(textRef.current)
    
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current)
      if (textRef.current) observer.unobserve(textRef.current)
    }
  }, [])
  
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 flex flex-col justify-center max-w-7xl mx-auto">
      <h2 className="text-center md:text-left uppercase tracking-[15px] text-gray-500 text-2xl mb-12 sm:mb-16">
        About
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div 
          ref={imageRef}
          className="relative flex-shrink-0 w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 opacity-0 -translate-x-12 group"
        >
          <img
            src="https://i.postimg.cc/SRXwbFcb/1704874858832.jpg"
            alt="Mike Munene portrait"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div 
          ref={textRef}
          className="max-w-xl space-y-6 md:space-y-8 transition-all duration-700 opacity-0 translate-y-8"
        >
          <h3 className="text-3xl font-bold">
            Here is a <span className="underline decoration-4 decoration-amber-400/70 pb-1">little</span> background
          </h3>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am Mike Munene, a dedicated developer specializing in mobile and web applications. My expertise lies in JavaScript and TypeScript, utilizing frameworks such as React Native, Next.js, and React.js to create dynamic and responsive applications. While these are my primary tools, I am versatile and adept at working with a variety of programming languages to meet the diverse needs of any project.
          </p>
          
          <div className="pt-4">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2">
              My Skills
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>
    </section>
  )
}

export default About
