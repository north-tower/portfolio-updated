import React from 'react';
import { motion } from 'framer-motion';

function ExperienceCard2() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/company-logo-zenitech.jpg"
        alt="Zenitech Solutions"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Zenitech Solutions</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/tech-icon-sql.png" alt="SQL" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-php.png" alt="PHP" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-html.png" alt="HTML" />
          <img className="h-10 w-10 rounded-full" src="/tech-icon-js.png" alt="JavaScript" />
        </div>
        <p className="uppercase py-5 text-gray-300">FEB 4 2023 - MAY 31 2023</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>SQL Database Management: Designing and optimizing database schemas, writing SQL queries, and ensuring data integrity.</li>
          <li>PHP Backend Development: Creating server-side logic, integrating APIs, and implementing security measures in PHP applications.</li>
          <li>HTML/CSS Frontend Development: Translating designs into responsive web pages, ensuring cross-browser compatibility and usability.</li>
          <li>Full-Stack Integration: Integrating frontend and backend components, implementing dynamic content using JavaScript and AJAX.</li>
          <li>Testing and Quality Assurance: Writing unit tests, conducting code reviews, and debugging to maintain code quality and performance.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard2;
