import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs'

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services=[
  {
    name:'Website Development',
    description:
     'Experienced in React, Next.js, TypeScript, and Node.js. Passionate about crafting websites. Eager to collaborate and bring your ideas to life.',
    Link:'Learn more',
  },
  {
    name:'Technical Content Writing',
    description:
   ' Dedicated to crafting technical content on Web2, Web3, decentralized dApps, and exploring innovative concepts in the evolving landscape of Web3.',
    Link:'Learn more',
  },
  {
    name:'Decentralised Apps',
    description:
   ' Developing decentralized dApps using Solidity, Hardhat, and cutting-edge Web3 tech. Ready to bring your vision to life.Build with me DMs are open',
    Link:'Learn more',
  } ,
]

const Services = () => {
  return(
    <section className='section' id='service'>
     <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {}
        <motion.div 
         variants={fadeIn('right',0.3)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3  max-w-[455px] mb-16'>
          I'm a Full-Stack Web3 Developer with over 1 year of experience
          </h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        {}
        <motion.div 
           variants={fadeIn('left',0.3)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        className='flex-1'>
          {}
          <div>
            {services.map((service,index)=>{
     const {name,description,link}=service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
                key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                    {name}
                    </h4>
                    <p className='font-secondary leading-tight '>
                    {description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                    </a>
                    <a href='#' className='text-gradient text-sm'>
                      Learn more
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
     </div>
    </section>
  );
};

export default Services;
