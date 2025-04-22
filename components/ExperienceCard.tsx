import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/company-logo-kilimo.jpg"
        alt="Kilimo Feeds Limited"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Kilimo Feeds Limited</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/tech-icon-1.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-2.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-3.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-4.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">JAN 2024 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Design and Develop Software: Create, test, and maintain software applications.</li>
          <li>Code Writing: Write efficient, maintainable, and scalable code.</li>
          <li>Problem-Solving: Debug and resolve technical issues.</li>
          <li>Collaboration: Work with cross-functional teams including designers, product managers, and other engineers.</li>
          {/* Uncomment and add more list items as needed */}
          {/* 
          <li>System Architecture: Design and implement software architecture and infrastructure.</li>
          <li>Code Review: Review and provide feedback on code written by peers.</li>
          <li>Documentation: Create and maintain technical documentation.</li>
          <li>Testing: Conduct unit, integration, and system testing.</li>
          <li>Continuous Learning: Stay updated with the latest industry trends and technologies.</li>
          <li>Client Interaction: Gather requirements and feedback from stakeholders and users.</li>
          */}
        </ul>
      </div>
    </article>
  );
}
