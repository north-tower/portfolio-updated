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
      src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg"
      alt=''
    />

    <div className='px-1 md:px-10 text-center md:text-left'>
      <h4 className='font-light'>Freelancer</h4>
      <p className='font-bold text-xs mt-1'>Fiverr</p>
      <div className='flex justify-center md:justify-start space-x-2 my-2'>
        <img 
          className="h-10 w-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3Kanc_cP40aF_HzAZChUrqpiXXrM6B4w1w&s"
          alt=''
        />
      </div>
      <p className='uppercase py-1 text-gray-300 text-sm'>
        OCT 23 2021 - DEC 08 2022
      </p>
      <ul className='list-disc space-y-4 ml-5 text-sm text-left h-24 overflow-y-scroll'>
   <li>
   Data Analysis: Conducted data cleaning, processing, and analysis using R.    
    </li>  
    <li>
Statistical Modeling: Developed and implemented statistical models to draw insights from data.
        </li> 
        <li>
        Visualization: Created detailed and informative data visualizations using ggplot2 and other R packages.
        </li>
        <li>
        Custom Scripts: Wrote custom R scripts to automate data-related tasks and workflows.
        </li>
{/* Consultation: Provided expert advice on best practices for data analysis and statistical modeling.
Report Generation: Generated comprehensive reports summarizing analysis results and insights.
Client Interaction: Communicated with clients to understand their requirements and deliver tailored solutions.
Problem Solving: Addressed and resolved data-related issues and challenges for clients.
Project Management: Managed multiple projects simultaneously, ensuring timely and quality delivery.
Continuous Learning: Stayed updated with the latest developments in R programming and data science.
        
        */}
      </ul>
    </div>
  </article>
  )
}

export default ExperienceCard2