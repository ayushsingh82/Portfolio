import React from 'react';

import Image from '../assets/avatar.svg'

import {FaGithub,FaYoutube,FaDribbble,FaTwitter,FaTelegram,FaLinkedin} from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
     id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:g-x-12'>
          {}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
             variants={fadeIn('up',0.3)} 
            initial="hidden"
             whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-4'>
            Ayush <span>Singh</span>
             </motion.h1>
             <motion.div 
                variants={fadeIn('up',0.4)} 
            initial="hidden"
             whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
            className='mb-6 text-[36px] lg:tetxt-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Technical Writer',
                2000,
                'Learner',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
              </motion.div>
              <motion.p 
                 variants={fadeIn('up',0.4)} 
            initial="hidden"
             whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </motion.p>
              <motion.div
                 variants={fadeIn('up',0.4)} 
            initial="hidden"
             whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
               className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>Contact me</button>
                <a href='#' className='text-gradient btn-link'>My Portfolio</a>
              </motion.div>
              {}
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
          {}
          <motion.div 
             variants={fadeIn('down',0.5)} 
            initial="hidden"
             whileInView={'show'}
          className='hidden lg:flex flex-1  max-w-[320px] lg:max-w-[482px]  '>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
