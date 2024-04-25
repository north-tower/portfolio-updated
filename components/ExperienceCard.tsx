import { motion } from 'framer-motion'

function ExperienceCard() {
  return(
    <article className='flex flex-col rounded-lg h-96
    items-center space-y-7 flex-shrink-0 w-[400px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#5e5c5c] 
    p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity
    duration-200 overflow-hidden
   '>
<motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{ once: true}}
            className='w-16 h-16  rounded-full
            object-cover object-center'
           src="https://cdn.sanity.io/images/g86efv0h/production/7e272592098820aae11fa8d3924101bcd691a620-500x500.png?w=2000&fit=max&auto=format"
            alt=''
        />
        <div className='px-1 md:px-10'>
            <h4 className='text-4xl font-light'>Volunteer - Data Analyst</h4>
            <p className='font-bold 
             text-2xl mt-1'>experience?.company</p>
            <div className='flex space-x-2 my-2'>
               
                    <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn.sanity.io/images/g86efv0h/production/e65d015a9b1e4d4e7292427af7a1bcb7cd11a9ed-800x800.svg"
                    />
              
            </div>
            <p className='uppercase py-1 text-gray-300 text-sm'>Stared work</p>

            <ul className='list-disc space-y-4 ml-5
             text-lg '>
<li >point</li>
               </ul>
           
        </div>
     </article>
  )
  }

export default ExperienceCard