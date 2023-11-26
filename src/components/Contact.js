import React, { useState,useRef } from 'react';
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser";

import {FaGithub,FaYoutube,FaDribbble,FaTwitter,FaTelegram,FaLinkedin} from 'react-icons/fa'
import { fadeIn } from '../variants';


const Contact = () => {

  const formRef=useRef();
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:"",
  });

  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {target}=e;
    const {name,value}=target;

    setForm({
      ...form,
      [name]:value,
    })
  }

  // template_2t4vxxq
// service_kkga0b6
// BMmIAOHE9gJnka1DT
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_kkga0b6',
    'template_3mnz7aj',
    {
      from_name:form.name,
      to_name:'Ayush Singh',
      from_email:form.email,
      to_email:'ayushsinghmi712@gmail.com',
      message:form.message,
    },
    'BMmIAOHE9gJnka1DT'
    ).then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
       )
  }

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
      ref={formRef}
      onSubmit={handleSubmit}
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
          name='name'
          value={form.name}
              onChange={handleChange}
        />
          <input className='bg-transparent border-b py-3 outline-none w-full
        placeholder:text-white focus:border-accent transition-all' 
        type='email'
          placeholder='Your email'
          name='email'
              value={form.email}
              onChange={handleChange}
        />
        <textarea className='bg-transparent border-b py-12 outline-none w-full
        placeholder:text-white focus:border-accent transition-all resize-none mb-12'
        name='message'
              value={form.message}
              onChange={handleChange}
        placeholder='Your message' >
        </textarea>
        <button className='btn btn-lg'
        type='submit'>
        {/* Send Message */}
        {loading ? "Sending..." : "Send"}
        </button>
      </motion.form>
    </div>
    </div>
    </section>
  );
};

export default Contact;
