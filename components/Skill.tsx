import React from 'react';
import { motion } from 'framer-motion';

function Skill({ url, level, directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -60 : 60,
          opacity: 0
        }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={url}
        alt="Skill icon"
        className="rounded-full border border-gray-500 object-contain w-16 h-16 md:w-20 md:h-20 lg:h-24 lg:w-24 
        filter group-hover:grayscale transition duration-300 ease-in-out bg-white p-1"
      />
      
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 
      ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 lg:h-24 lg:w-24 
      rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{level}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
