'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

function Hero() {
  const [text, count] = useTypewriter({
    words:[
        
        `Hi, I'm Mike Munene.`,
    "Coffee Enthusiast & Passionate Coder",
    "<ButCodeIsMyTruePassion />"

    ],
    loop: true,
    delaySpeed: 2000
});
  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center
      text-center overflow-hidden ' >
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://i.postimg.cc/SRXwbFcb/1704874858832.jpg"
        alt=''
        />
        <div className="z-20">
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
          <h1 className='text-3xl lg:text-4xl font-light px-10'>
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#f7A80A' />
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>

                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                
                <Link href="#skills">
                     <button className='heroButton'>Skills</button>
                </Link>

                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>    
               
                
            </div>
          </div>
        
      </div>
  )
}

export default Hero;
