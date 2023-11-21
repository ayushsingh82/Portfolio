import React from 'react';
import {motion} from 'framer-motion'


import {FaGithub,FaYoutube,FaDribbble,FaTwitter,FaTelegram,FaLinkedin} from 'react-icons/fa'
import { fadeIn } from '../variants';


const Contact = () => {
  return(
    <section className=' py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {}
      <motion.div
         variants={fadeIn('right',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1 flex justify-start items-center mb-[40px]'>
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2
          tracking-wide'>Get in Touch</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>          
          Let's work <br/>Together:
          </h2>
          <motion.div 
                 variants={fadeIn('up',0.7)} 
            initial="hidden"
             whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
              className='flex md:text-[25px] gap-x-6 max-w-mx mx-auto  text-[20px] 
              lg:max-0'>
                <a href='https://www.linkedin.com/in/ayush-singh-02b978248'>
                  <FaLinkedin/>
                </a>
                <a href='https://github.com/ayushsingh82'>
                  <FaGithub/>
                </a>
                <a href='https://twitter.com/eth_ayushS'>
                  <FaTwitter/>
                </a>
                
              </motion.div>
        </div>
      </motion.div>

      {}
      <motion.form
         variants={fadeIn('left',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
       className='flex-1 border rounded-2xl flex flex-col gap-y-6
      pb-24 p-6 items-start' >
        <input className='bg-transparent border-b py-3 outline-none w-full
        placeholder:text-white hover:border-accent transition-all' 
        type='text'
          placeholder='Your name'
        />
          <input className='bg-transparent border-b py-3 outline-none w-full
        placeholder:text-white focus:border-accent transition-all' 
        type='text'
          placeholder='Your email'
        />
        <textarea className='bg-transparent border-b py-12 outline-none w-full
        placeholder:text-white focus:border-accent transition-all resize-none mb-12'
        placeholder='Your message' >
        </textarea>
        <button className='btn btn-lg'>Send Message</button>
      </motion.form>
    </div>
    </div>
    </section>
  );
};

export default Contact;
