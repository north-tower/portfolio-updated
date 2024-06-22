import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean;
}
function Skill({ directionLeft, name }: Props){
  return(
    <div className='group relative flex cursor-pointer'>
       <motion.img 
        initial={{
          x : directionLeft ? -200 : 200,
          opacity : 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src="https://cdn.sanity.io/images/g86efv0h/production/5106dd90453602cc4f28088b03ff0b23d770563c-800x800.svg"
        className='rounded-full border border-gray-500 object-cover w-16 h-16
        md:w-16 md:h-16 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      {name}
       <div className='absolute opacity-0 group-hover:opacity-80 transition
      }
      duration-300 ease-in-out group-hover:bg-white 
      h-16 w-16 md:w-16 md:h-16
      xl:w-16 xl:h-16 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl font-bold text-black opacity-100'>
            100%
          </p>
        </div>
      </div>
    
      </div>
  )
}

export default Skill