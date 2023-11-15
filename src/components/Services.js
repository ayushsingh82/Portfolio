import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs'

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services=[
  {
    name:'Website Development',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Link:'Learn more',
  },
  {
    name:'Technical Content Writing',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Link:'Learn more',
  },
  {
    name:'Decentralised Apps',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Link:'Learn more',
  } ,
]

const Services = () => {
  return(
    <section className='section' id='service'>
     <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {}
        <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3  max-w-[455px] mb-16'>
          I'm a Freelance Front-end Development with over 1 year of experience
          </h3>
          <button className='btn btn-sm'>See my work</button>
        </div>
        {}
        <div className='flex-1'>
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
                  <div>links</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Services;
