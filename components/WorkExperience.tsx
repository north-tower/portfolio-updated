'use client'

import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

function WorkExperience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Kilimo Feeds Limited",
      companyImage: "/company-logo-kilimo.jpg",
      dateStarted: "JAN 2024",
      dateEnded: "Present",
      techImages: [
        { src: "/tech/react.png", alt: "React" },
        { src: "/tech/nextjs.png", alt: "Next.js" },
        { src: "/tech/typescript.png", alt: "TypeScript" },
        { src: "/tech/tailwind.png", alt: "Tailwind CSS" }
      ],
      points: [
        "Design and develop modern web applications using React and Next.js",
        "Implement responsive and accessible user interfaces using Tailwind CSS",
        "Write clean, maintainable code using TypeScript",
        "Collaborate with cross-functional teams to deliver high-quality solutions"
      ]
    },
    {
      title: "Software Engineer",
      company: "Zenitech Solutions",
      companyImage: "/company-logo-zenitech.jpg",
      dateStarted: "FEB 2023",
      dateEnded: "MAY 2023",
      techImages: [
        { src: "/tech/php.png", alt: "PHP" },
        { src: "/tech/mysql.png", alt: "MySQL" },
        { src: "/tech/javascript.png", alt: "JavaScript" },
        { src: "/tech/html5.png", alt: "HTML5" }
      ],
      points: [
        "Developed and maintained PHP-based web applications",
        "Designed and optimized MySQL database schemas",
        "Implemented responsive front-end designs using HTML5 and JavaScript",
        "Conducted code reviews and maintained documentation"
      ]
    }
  ];

  return (
    <div className="relative h-screen flex flex-col items-center max-w-7xl px-4 md:px-10 mx-auto">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Experience
      </motion.h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-32
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7A80A]/80">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>

      {/* Navigation Hints */}
      <div className="absolute bottom-10 flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-[#f7A80A]/50" />
        <span className="text-sm text-gray-400">Scroll for more</span>
        <div className="w-2 h-2 rounded-full bg-[#f7A80A]/50" />
      </div>

      {/* Background Elements */}
      <div className="absolute top-[30%] -z-10 h-[500px] w-full bg-[#f7A80A]/10 -skew-y-12 opacity-20" />
    </div>
  );
}

export default WorkExperience
