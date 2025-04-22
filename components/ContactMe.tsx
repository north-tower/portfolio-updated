'use client'

import { useState, useEffect } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true)
    
    // Simulate form submission with a slight delay to show loading state
    setTimeout(() => {
      window.location.href = `mailto:muneshmyke@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`)}`
      setIsSubmitting(false)
      setIsSubmitted(true)
      reset()
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  // Contact info items for easier management
  const contactItems = [
    {
      icon: <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />,
      text: "+254799229340",
      href: "tel:+254799229340",
      ariaLabel: "Call phone number"
    },
    {
      icon: <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />,
      text: "muneshmyke@gmail.com",
      href: "mailto:muneshmyke@gmail.com",
      ariaLabel: "Send email"
    },
    {
      icon: <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />,
      text: "00100 Nairobi",
      href: "https://maps.google.com/?q=Nairobi+Kenya",
      ariaLabel: "View on map"
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left 
                 md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 w-full max-w-2xl mt-24 md:mt-0">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h4 className="text-xl md:text-2xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#f7ab0a]/50 underline">
              Let&apos;s Talk.
            </span>
          </h4>
          
          <div className="flex flex-col space-y-4 md:space-y-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center space-x-5 justify-center hover:bg-[#f7ab0a]/10 
                           py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
              >
                {item.icon}
                <p className="text-base md:text-lg">{item.text}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full md:w-4/5 mx-auto backdrop-blur-sm
                     p-6 md:p-8 rounded-lg shadow-lg border border-gray-300/20 bg-[#292929]/20"
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <input
                {...register('name', { required: "Name is required" })}
                placeholder="Name"
                className={`contactInput ${errors.name ? 'border-red-500' : ''}`}
                type="text"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div className="flex-1">
              <input 
                {...register('email', { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Email"
                className={`contactInput ${errors.email ? 'border-red-500' : ''}`}
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <input 
              {...register('subject', { required: "Subject is required" })}
              placeholder="Subject"
              className={`contactInput ${errors.subject ? 'border-red-500' : ''}`}
              type="text"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <textarea
              {...register('message', { required: "Message is required" })}
              placeholder="Message"
              className={`contactInput min-h-[100px] ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`bg-[#F7AB0A] py-3 px-5 rounded-md text-black font-bold
                     hover:bg-[#F7AB0A]/80 transition-all duration-300 
                     transform hover:scale-105 active:scale-95 disabled:opacity-70 
                     disabled:cursor-not-allowed flex justify-center items-center`}
          >
            {isSubmitting ? (
              <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
            ) : null}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-green-500/20 border border-green-500 text-green-500 p-3 rounded-md text-center"
            >
              Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </div>

      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[#F7AB0A]/10 -skew-y-3 z-[-1]" />
    </motion.div>
  )
}



export default ContactMe
