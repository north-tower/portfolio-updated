'use client'

import { motion } from 'framer-motion'


function Projects() {
  return(
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className='h-screen relative flex overflow-hidden flex-out
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
       text-2xl'>
            Projects
       </h3>

       </motion.div>
  )
}

export default Projects