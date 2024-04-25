import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white 
    h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
        </section>
        <section id='experience' className='snap-center'>
        <WorkExperience  />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start' >
        <Projects  />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
             className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
             cursor-pointer'
             src='https://firebasestorage.googleapis.com/v0/b/familia-blog.appspot.com/o/files%2F95a6e270cd322f9fa89852bd6314345c.jpg?alt=media&token=b4a3dfd3-2730-4259-8b64-68e62ae28e0d'
             alt=''
             />
          </div>
        </footer>
      </Link>
    </div>
  );
}
