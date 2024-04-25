'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

function Hero() {
  const [text, count] = useTypewriter({
    words:[
        `Hi, The Name's Mike Munene`,
        "Guy-who-loves-Coffee.tsx",
        "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000
});
  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center
      text-center overflow-hidden ' >
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://media.licdn.com/dms/image/D4E03AQHOim8p9QtZoA/profile-displayphoto-shrink_200_200/0/1704874858832?e=1719446400&v=beta&t=21fKgRO23JPRJV3Ol0DPc-BX_00Z5En13rOyjJ8Veeo"
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