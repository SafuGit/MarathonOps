import React from 'react';
import { useLoaderData } from 'react-router';
import MarathonCard from './MarathonCard';

const Marathons = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<div className='w-full flex flex-col items-center justify-center my-10'>
			<h1 className='text-4xl sm:text-5xl text-center font-bold'>MARATHON EVENTS COMING UP INCLUDE</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8'>
				{data.map((marathon, index) => (
					<MarathonCard key={index} data={marathon}></MarathonCard>
				))}
			</div>
		</div>
	);
};

export default Marathons;