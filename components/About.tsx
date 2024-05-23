'use client'

import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <div className='flex flex-col md:flex-row items-center'>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://media.licdn.com/dms/image/D4E03AQHOim8p9QtZoA/profile-displayphoto-shrink_200_200/0/1704874858832?e=1719446400&v=beta&t=21fKgRO23JPRJV3Ol0DPc-BX_00Z5En13rOyjJ8Veeo"
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[350px]'
        />
        <div className='space-y-10 px-0 md:px-10 max-w-lg'>
          <h4 className='text-2xl font-semibold'>
            Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background
          </h4>
          <p className='text-base'>
          I am Mike Munene, a dedicated developer specializing in mobile and web applications. My expertise lies in JavaScript and TypeScript, utilizing frameworks such as React Native, Next.js, and React.js to create dynamic and responsive applications. While these are my primary tools, I am versatile and adept at working with a variety of programming languages to meet the diverse needs of any project.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
