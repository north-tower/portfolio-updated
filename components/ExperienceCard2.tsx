import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard2() {
  return (
    <article className='flex flex-col rounded-lg h-96 items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] snap-center bg-[#5e5c5c] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-16 h-16 rounded-full object-cover object-center'
      src="https://cdn.worldvectorlogo.com/logos/z.svg"
      alt=''
    />

    <div className='px-1 md:px-10 text-center md:text-left'>
      <h4 className='font-light'>Software Engineer</h4>
      <p className='font-bold text-xs mt-1'>Zenitech Solutions</p>
      <div className='flex justify-center md:justify-start space-x-2 my-2'>
        <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
          alt=''
        />
        <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
          alt=''
        />
        <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/xampp.svg"
          alt=''
        />
         <img 
          className="h-10 w-10 rounded-full"
          src="https://cdn.worldvectorlogo.com/logos/mysql-3.svg"
          alt=''
        />
      </div>
      <p className='uppercase py-1 text-gray-300 text-sm'>
        FEB 4 2023 - MAY 31 2023
      </p>
      <ul className='list-disc space-y-4 ml-5 text-sm text-left h-24 overflow-y-scroll
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
   <li>
   SQL Database Management:

Designing and optimizing database schemas, writing SQL queries, and ensuring data integrity.    
    </li>  
    <li>
PHP Backend Development:

Creating server-side logic, integrating APIs, and implementing security measures in PHP applications.
        </li> 
        <li>
        HTML/CSS Frontend Development:

Translating designs into responsive web pages, ensuring cross-browser compatibility and usability.
        </li>
        <li>
        Full-Stack Integration:

Integrating frontend and backend components, implementing dynamic content using JavaScript and AJAX.
        </li>
        <li>
Testing and Quality Assurance:

Writing unit tests, conducting code reviews, and debugging to maintain code quality and performance.
</li>
      </ul>
    </div>
  </article>
  )
}

export default ExperienceCard2