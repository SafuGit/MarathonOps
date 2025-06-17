import React from 'react';
import { Link } from 'react-router';

const NoApplications = () => {
  return (
    <div className='text-center'>
      <h1 className='text-5xl mb-2'>NO APPLICATIONS FOUND</h1>
      <Link to={'/marathons'} className='btn bg-yellow-600 rounded-full'>Apply Now</Link>
    </div>
  );
};

export default NoApplications;