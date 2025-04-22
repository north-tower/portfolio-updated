import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard3() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/company-logo-fiverr.jpg"
        alt="Fiverr"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Freelancer</h4>
        <p className="font-bold text-2xl mt-1">Fiverr</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/tech-icon-r.png" alt="R" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-data.png" alt="Data Analysis" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-stats.png" alt="Statistics" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-viz.png" alt="Data Visualization" />
        </div>
        <p className="uppercase py-5 text-gray-300">OCT 23 2021 - DEC 08 2022</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Data Analysis: Conducted data cleaning, processing, and analysis using R.</li>
          <li>Statistical Modeling: Developed and implemented statistical models to draw insights from data.</li>
          <li>Visualization: Created detailed and informative data visualizations using ggplot2 and other R packages.</li>
          <li>Custom Scripts: Wrote custom R scripts to automate data-related tasks and workflows.</li>
          {/* 
          <li>Consultation: Provided expert advice on best practices for data analysis and statistical modeling.</li>
          <li>Report Generation: Generated comprehensive reports summarizing analysis results and insights.</li>
          <li>Client Interaction: Communicated with clients to understand their requirements and deliver tailored solutions.</li>
          <li>Problem Solving: Addressed and resolved data-related issues and challenges for clients.</li>
          <li>Project Management: Managed multiple projects simultaneously, ensuring timely and quality delivery.</li>
          <li>Continuous Learning: Stayed updated with the latest developments in R programming and data science.</li>
          */}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard3;
