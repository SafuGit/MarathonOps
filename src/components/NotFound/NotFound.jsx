import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center mt-20 mb-20'>
			<h1 className='text-6xl mb-4'>404</h1>
			<h2 className='text-3xl mb-2'>Page Not Found</h2>
			<p className='text-lg text-gray-600'>The page you are looking for does not exist.</p>
			<Link to={'/'} className='btn bg-yellow-600 rounded-full font-extralight mt-4'>Go to Home</Link>
		</div>
	);
};

export default NotFound;