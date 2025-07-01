import React from 'react';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 mt-auto">
      <aside>
        <p className="text-xl font-extralight mb-0">
          MarathonOps ltd. <br />
          <span className='text-gray-300 text-lg font-extralight'>
            Connecting you with the Best Runners since 2025.
          </span>
        </p>
        <p className='font-extralight text-md'>Copyright © {new Date().getFullYear()} SAFWAN SADID - All right reserved</p>
      </aside>
      <div className='flex'>
        <nav className='flex gap-4 link text-gray-400'>
          <Link to={'/'}>Home</Link>
          <Link to={'/marathons'}>Marathons</Link>
          <Link to={'/contactUs'}>Contact Us</Link>
        </nav>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href='https://www.linkedin.com/in/safwan-sadid-1b1978358/' className='text-2xl'>
            <FaLinkedin></FaLinkedin>
          </a>
          <a href='https://github.com/safugit' className='text-2xl'>
            <FaGithub></FaGithub>
          </a>
          <a className='text-2xl' href='https://discord.com/users/871313769723228160'>
            <FaDiscord></FaDiscord>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;