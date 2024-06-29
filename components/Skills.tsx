'use client'

import { motion } from 'framer-motion'
import Skill from './Skill'

const skills = [
    { url: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', level: '95' },
    { url: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', level: '90' },
    { url: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', level: '95' },
    { url: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', level: '98' },
    { url: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg', level: '90' },
    { url: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', level: '90' },
    { url: 'https://cdn.worldvectorlogo.com/logos/xampp.svg', level: '85' },
    { url: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', level: '70' },
    { url: 'https://cdn.worldvectorlogo.com/logos/mysql-3.svg', level: '70' },
    { url: 'https://cdn.worldvectorlogo.com/logos/r-lang.svg', level: '99' },

    { url: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', level: '95' },
    { url: 'https://cdn.worldvectorlogo.com/logos/firebase-2.svg', level: '95' },
    { url: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg', level: '90' },
    { url: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg', level: '95' },
    { url: 'https://cdn.worldvectorlogo.com/logos/sanity.svg', level: '80' },
    { url: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', level: '98' },
    { url: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg', level: '80' },

    { url: 'https://cdn.worldvectorlogo.com/logos/mapbox-2.svg', level: '98' },







    // Add more skills as needed
];
function Skills() {
  return(
    <motion.div
    initial={{opacity: 0}}
    whileInView={{ opacity:1}}
    transition={{ duration: 1.5}}
    className='h-screen flex relative flex-col
    text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto
    items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px]
        text-gray-500 text-2xl'>
             Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px]
        text-gray-500 text-sm mt-0'>
             Hover over a skill for current profieciency
        </h3>   

        <div className='grid grid-cols-4 gap-5 absolute top-48  '>
           {skills.map((skill, index) => (
                <Skill key={index} url={skill.url} level={skill.level} />
            ))}
         

          </div>
        </motion.div>
  )
}

export default Skills