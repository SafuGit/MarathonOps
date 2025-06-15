import React, { use } from 'react';
import MarathonCard from '../Marathons/MarathonCard';
import { FaLocationPin } from 'react-icons/fa6';
import { BiCalendar } from 'react-icons/bi';

const UpcomingMarathons = ({dataPromise}) => {
	const data = use(dataPromise);
	return (
		<div className='grid grid-cols-3 gap-8 w-[90vw] mx-auto mb-25'>
			{data.map((marathon, index) => (
				<div className='rounded-2xl shadow-md bg-base-300' key={index}>
					<div>
						<img src={marathon.marathonImage} className='rounded-t-2xl w-full h-60' alt="" />
					</div>
					<div className='p-4'>
						<h1 className='text-3xl text-center'>{marathon.marathonTitle}</h1>
						<div className='divider divider-vertical mt-0 mb-0'></div>
						<div className='flex gap-1 mb-2'>
							<FaLocationPin className='text-xl text-red-600'></FaLocationPin>
							<p className='text-gray-600'>{marathon.location}</p>
						</div>
						<div className='flex gap-1 mb-6'>
							<BiCalendar className='text-xl'></BiCalendar>
							<p className='text-gray-600'>{marathon.marathonDate}</p>
						</div>
						<button className='w-full bg-yellow-600 font-extralight p-2 rounded-full'>View Details</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default UpcomingMarathons;