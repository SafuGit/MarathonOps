import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { FaLocationPin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className='flex flex-col w-[90vw] mx-auto justify-center items-center mt-20 mb-20'>
      <h1 className='text-5xl'>Contact Us</h1>
      <p className='text-lg text-gray-400 mb-4'>Any questions or remarks? Just write to us.</p>
      <div className='w-full flex bg-base-200 rounded-2xl'>
        <div className='w-[40%] bg-base-300 p-8 rounded-l-2xl'>
          <h1 className='text-3xl'>Contact Information</h1>
          <p className='text- lg text-gray-500 mb-20'>Say something to start a live chat!</p>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2 items-center'>
              <BiPhone className='text-2xl'></BiPhone> 
              <p className='text-lg'>+880 1981575920</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdEmail className='text-2xl'></MdEmail>
              <p className='text-lg'>safwan55.ah@gmail.com</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaLocationPin className='text-2xl'></FaLocationPin>
              <p className='text-lg'>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className='w-[60%] p-8'>
          <h1 className='text-3xl mb-2'>About Us</h1>
          <p className='text-gray-600'>MarathonOps is dedicated to building a vibrant running community by connecting passionate runners with top-tier marathon events. Our mission is to make marathon participation smoother, smarter, and more accessible — whether you're a first-timer or a seasoned athlete. We believe in promoting fitness, discipline, and unity through well-organized, meaningful events that inspire people to go the distance — literally. Join us as we push boundaries and celebrate every runner's journey.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;