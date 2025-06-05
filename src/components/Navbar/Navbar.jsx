import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='flex p-4 justify-between'>
      <div className='flex items-center'>
        <div className='rounded-full bg-[#BEF2C6] text-xl text-black p-3 italic border border-gray-400 font-medium'>
          <h1>MarathonOps</h1>
        </div>
        <div className='bg-[#E4F6E7] rounded-full text-lg p-1 border border-gray-400' id='navLinks'>
          <div className='flex gap-4 items-center'>
            <NavLink to={'/'} className={'p-2 rounded-full hover:bg-[#BEF2C6]'}>Home</NavLink>
            <NavLink to={'/marathons'} className={'p-2 rounded-full hover:bg-[#BEF2C6]'}>Marathons</NavLink>
          </div>
        </div>
      </div>
      <div className='flex gap-1 items-center'>
        <button className='btn btn-primary rounded-full font-normal text-xl'>Login</button>
        <button className='btn btn-info rounded-full font-normal text-xl'>Register</button>
      </div>
    </div>
  );
};

export default Navbar;