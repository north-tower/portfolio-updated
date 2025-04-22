'use client'

import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitting(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      // Open email client with populated fields
      window.location.href = `mailto:muneshmyke@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 3000);
    }, 500);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Contact
      </motion.h3>

      <div className="flex flex-col space-y-8 mt-20 w-full max-w-2xl">
        <motion.h4 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-semibold text-center text-2xl md:text-3xl"
        >
          I have got just what you need.{" "}
          <span className="decoration-[#f7A80A] underline">Let&apos;s Talk.</span>
        </motion.h4>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-5 justify-center group cursor-pointer">
            <div className="rounded-full bg-[#f7A80A]/10 p-3 group-hover:bg-[#f7A80A]/20 transition-all duration-300">
              <Phone className="text-[#f7A80A] h-6 w-6" />
            </div>
            <p className="text-lg group-hover:text-[#f7A80A] transition-all duration-300">+254799229340</p>
          </div>

          <div className="flex items-center space-x-5 justify-center group cursor-pointer">
            <div className="rounded-full bg-[#f7A80A]/10 p-3 group-hover:bg-[#f7A80A]/20 transition-all duration-300">
              <Mail className="text-[#f7A80A] h-6 w-6" />
            </div>
            <p className="text-lg group-hover:text-[#f7A80A] transition-all duration-300">muneshmyke@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center group cursor-pointer">
            <div className="rounded-full bg-[#f7A80A]/10 p-3 group-hover:bg-[#f7A80A]/20 transition-all duration-300">
              <MapPin className="text-[#f7A80A] h-6 w-6" />
            </div>
            <p className="text-lg group-hover:text-[#f7A80A] transition-all duration-300">00100 Nairobi</p>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onSubmit={handleSubmit(onSubmit)} 
          className="flex flex-col space-y-4 w-full mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              {...register('name', { required: true })}
              placeholder="Name" 
              className="contactInput flex-1" 
              type="text"
            />
            <input
              {...register('email', { required: true })}
              placeholder="Email" 
              className="contactInput flex-1" 
              type="email"
            />
          </div>

          <input
            {...register('subject', { required: true })}
            placeholder="Subject" 
            className="contactInput" 
            type="text"
          />

          <textarea
            {...register('message', { required: true })}
            placeholder="Message" 
            className="contactInput h-36"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-yellow-500 to-orange-500 py-4 px-10 rounded-lg text-black font-bold text-lg 
              transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-xl
              ${submitted ? "bg-gradient-to-r from-green-500 to-green-600" : ""}`}
          >
            {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Submit"}
          </motion.button>
        </motion.form>
      </div>

      <style jsx>{`
        .contactInput {
          @apply outline-none bg-[#1F2937]/40 rounded-lg border-b-2 px-6 py-4 border-[#374151]
          text-gray-100 placeholder-gray-400 transition-all focus:border-[#f7A80A]/40 
          focus:text-[#f7A80A] hover:border-[#f7A80A]/40 shadow-lg;
        }
      `}</style>
    </div>
  );
}

export default ContactMe;
