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
      src="data:image/png;base64,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"
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