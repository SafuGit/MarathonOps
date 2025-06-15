import React from 'react';
import MarathonCard from '../Marathons/MarathonCard';

const HomeMarathons = ({data}) => {
	return (
		<div className='w-[90vw] mx-auto mt-15 mb-15'>
			<h1 className="text-5xl mb-2">Marathons</h1>
			<div className='grid grid-cols-3 gap-8'>
				{data.map((marathon, index) => (
					<MarathonCard key={index} data={marathon}></MarathonCard>
				))}
			</div>
		</div>
	);
};

export default HomeMarathons;