import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  company: string;
  companyImage: string;
  techImages: { src: string; alt: string; }[];
  dateStarted: string;
  dateEnded: string;
  points: string[];
};

export default function ExperienceCard({
  title,
  company,
  companyImage,
  techImages,
  dateStarted,
  dateEnded,
  points
}: Props) {
  return (
    <article className="flex flex-col rounded-2xl items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
      snap-center bg-[#292929]/50 p-8 hover:bg-[#292929]/75 cursor-pointer transition-all duration-300 
      overflow-hidden backdrop-blur-sm border border-gray-700/50 group">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative w-32 h-32 xl:w-[200px] xl:h-[200px] mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-[#f7A80A]/20 rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-300" />
        <img
          className="relative rounded-full w-full h-full object-cover object-center border-2 border-[#f7A80A]/20 group-hover:border-[#f7A80A]/50 transition-all duration-300"
          src={companyImage}
          alt={company}
        />
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-0 md:px-10 w-full"
      >
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-3xl md:text-4xl font-light text-white/90 group-hover:text-[#f7A80A] transition-colors duration-300">
            {title}
          </h4>
          <p className="font-bold text-xl md:text-2xl mt-2 text-white/80">
            {company}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 my-4 justify-center md:justify-start">
          {techImages.map((tech, index) => (
            <div 
              key={index}
              className="relative group/tech bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <img 
                className="h-8 w-8 object-contain" 
                src={tech.src} 
                alt={tech.alt}
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {tech.alt}
              </div>
            </div>
          ))}
        </div>

        <p className="py-3 text-gray-300 font-medium tracking-wider text-sm md:text-base">
          {dateStarted} - {dateEnded}
        </p>

        <motion.ul 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="list-disc space-y-3 ml-5 text-base md:text-lg text-gray-300/90"
        >
          {points.map((point, index) => (
            <li key={index} className="group-hover:text-white/90 transition-colors duration-300">
              {point}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </article>
  );
}
