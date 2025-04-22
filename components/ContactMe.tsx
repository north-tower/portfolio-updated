'use client'

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "lucide-react";
import { useState } from "react";

// Note: react-hook-form is used in original but we'll use built-in state for this example
// since we can't import that library in the artifact

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Open email client with populated fields
      window.location.href = `mailto:muneshmyke@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 500);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-widest text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 mt-20">
        <h4 className="font-semibold text-center text-xl md:text-2xl">
          I have got just what you need.{" "}
          <span className="decoration-amber-500 underline">Let's Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center group">
            <div className="rounded-full bg-amber-500/10 p-2 group-hover:bg-amber-500/20 transition-all duration-300">
              <PhoneIcon className="text-amber-500 h-5 w-5" />
            </div>
            <p className="group-hover:text-amber-500 transition-all duration-300">+254799229340</p>
          </div>

          <div className="flex items-center space-x-5 justify-center group">
            <div className="rounded-full bg-amber-500/10 p-2 group-hover:bg-amber-500/20 transition-all duration-300">
              <EnvelopeIcon className="text-amber-500 h-5 w-5" />
            </div>
            <p className="group-hover:text-amber-500 transition-all duration-300">muneshmyke@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center group">
            <div className="rounded-full bg-amber-500/10 p-2 group-hover:bg-amber-500/20 transition-all duration-300">
              <MapPinIcon className="text-amber-500 h-5 w-5" />
            </div>
            <p className="group-hover:text-amber-500 transition-all duration-300">00100 Nairobi</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-md mx-auto p-5 bg-gray-800/30 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
              required
            />
          </div>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="contactInput h-32"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-amber-500 py-3 px-10 rounded-md text-black font-bold text-lg 
              hover:bg-amber-400 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed
              ${submitted ? "bg-green-500 hover:bg-green-500" : ""}`}
          >
            {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Submit"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .contactInput {
          @apply outline-none bg-gray-700/40 rounded-sm border-b px-4 py-3 border-gray-500 
          text-gray-300 placeholder-gray-400 transition-all focus:border-amber-500/40 
          focus:text-amber-500/80 hover:border-amber-500/40;
        }
      `}</style>
    </div>
  );
}

export default ContactMe;
