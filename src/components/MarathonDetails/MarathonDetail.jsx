import dayjs from 'dayjs';
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import TimeLeft from '../TimeLeft/TimeLeft';

export const parseDate = (dateStr) => {
		const [day, month, year] = dateStr.split('/');
		return dayjs(`${year}-${month}-${day}`)
}

const MarathonDetail = () => {
	const data = useLoaderData();
	const [marathonDate, marathonTime] = data.marathonDate.split('T');

	const dates = {
		currentDate: dayjs(),
		startDate: parseDate(data.startRegistrationDate),
		endDate: parseDate(data.endRegistrationDate),
	}
	console.log(data);

	const isRegistrationOpen = dates.currentDate >= dates.startDate && dates.currentDate <= dates.endDate;
	console.log(isRegistrationOpen);

	return (
		<div className='w-[80vw] mx-auto my-10 bg-base-300 rounded-3xl'>
			<div className='relative'>
				<img src={data.marathonImage} className='rounded-t-3xl w-full opacity-50' alt="" />
				<TimeLeft endDate={data.endRegistrationDate}></TimeLeft>
			</div>
			<div className='p-4'>
				<h1 className='text-3xl mt-2 font-extralight'>{data.marathonTitle}</h1>
				<div className='grid grid-cols-3 mt-2'>
					<div className='flex flex-col'>
						<p>Marathon Date</p>
						<p>{marathonDate}</p>
					</div>
					<div className='flex flex-col'>
						<p>Running Distance</p>
						<p>{data.runningDistance}</p>
					</div>
					<div className='flex flex-col'>
						<p>Marathon Location</p>
						<p>{data.location}</p>
					</div>
				</div>
				<h1 className='text-2xl mt-2 font-extralight'>Description</h1>
				<p>{data.description}</p>
				{isRegistrationOpen ? (
					<div className='mt-4'>
						<Link className='btn bg-yellow-600 w-full font-extralight rounded-full' to={`/marathonRegister/${data._id}`}>Register Now!</Link>
					</div>
				) : <div className='bg-red-400 p-2 rounded-3xl mt-4 text-center'>
						<p className='text-xl'>Registration is Closed!</p>
					</div>}
			</div>
		</div>
	);
};

export default MarathonDetail;