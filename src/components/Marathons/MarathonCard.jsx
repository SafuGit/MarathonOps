import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FaLocationPin } from 'react-icons/fa6';
import { Link } from 'react-router';

const MarathonCard = ({data}) => {
	const [ marathonDate, marathonTime ] = data.marathonDate.split('T');
	const [ startRegistrationDate, startRegistrationTime ] = data.startRegistrationDate.split('T');
	const [ endRegistrationDate, endRegistrationTime ] = data.endRegistrationDate.split('T');

	return (
		<div className='rounded-3xl bg-base-200 border border-gray-400'>
			<img src={data.marathonImage} className='rounded-t-3xl w-90' alt="" />
			<div className='px-6'>
				<div className='bg-[#BEF2C6] border border-gray-300 rounded-b-3xl mb-4 p-4'>
					<h2 className='text-2xl text-center'>{data.marathonTitle}</h2>
					<div className='divider divider-vertical mt-0 mb-1'></div>
					<div className='flex items-center gap-1'>
						<FaLocationPin className='text-red-600'></FaLocationPin>
						<p>{data.location}</p>
					</div>
					<div className='flex gap-1 items-center mt-2'>
						<BiCalendar></BiCalendar>
						<p>{marathonDate} <span className='text-gray-600'>(YYYY/MM/DD)</span></p>
					</div>
					<div className='flex gap-2 items-center mt-2'>
						{/* <BsClock></BsClock> */}
						<p className='text-sm'>START: {startRegistrationDate}  <br /> END: {endRegistrationDate}</p>
					</div>
				</div>
				<Link to={`/marathon/${data._id}`} className='btn bg-yellow-600 mb-4 w-full rounded-full font-extralight'>View Details</Link>
			</div>
		</div>
	);
};

export default MarathonCard;