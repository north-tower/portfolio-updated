import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg h-96 items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] snap-center bg-[#5e5c5c] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-16 h-16 rounded-full object-cover object-center'
        src="https://cdn.sanity.io/images/g86efv0h/production/7e272592098820aae11fa8d3924101bcd691a620-500x500.png?w=2000&fit=max&auto=format"
        alt=''
      />

      <div className='px-1 md:px-10 text-center md:text-left'>
        <h4 className='font-light'>Software Engineer</h4>
        <p className='font-bold text-xs mt-1'>Kilimo Feeds Limited</p>
        <div className='flex justify-center md:justify-start space-x-2 my-2'>
          <img 
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMklBUVBX0yV0l3hIdTIxP-luLdoRYZAzvbA&s"
            alt=''
          />
        </div>
        <p className='uppercase py-1 text-gray-300 text-sm'>
          JAN 2024 - "Present"
        </p>
        <ul className='list-disc space-y-4 ml-5 text-sm text-left h-24 overflow-y-scroll'>
          <li>Design and Develop Software: Create, test, and maintain software applications.</li>
          <li>Code Writing: Write efficient, maintainable, and scalable code.</li>
          <li>Problem-Solving: Debug and resolve technical issues.</li>
          <li>Collaboration: Work with cross-functional teams including designers, product managers, and other engineers.</li>
          {/* Uncomment and add more list items as needed */}
          {/* <li>System Architecture: Design and implement software architecture and infrastructure.</li>
          <li>Code Review: Review and provide feedback on code written by peers.</li>
          <li>Documentation: Create and maintain technical documentation.</li>
          <li>Testing: Conduct unit, integration, and system testing.</li>
          <li>Continuous Learning: Stay updated with the latest industry trends and technologies.</li>
          <li>Client Interaction: Gather requirements and feedback from stakeholders and users.</li> */}
        </ul>
      </div>
    </article>
  );
}
