import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const MarathonRegister = () => {
	const data = useLoaderData();
	const { user } = use(AuthContext);
	return (
		<div className='w-[50vw] mx-auto my-10 bg-base-300 rounded-3xl p-4'>
			<h1 className='text-3xl font-extralight'>Registration</h1>
			<div className='divider divider-vertical mt-0'></div>
			<form action="" className='flex flex-col gap-4'>
				<div className='flex justify-between items-center-safe'>
					<p className='text-xl'>Marathon Title</p>
					<input readOnly disabled className='input rounded-3xl' type="text" placeholder='Marathon Title' defaultValue={data.marathonTitle}/>
				</div>
				<div className='flex justify-between items-center'>
					<p className='text-xl'>Marathon Date</p>
					<input readOnly disabled type="text" className='input rounded-3xl' placeholder='Marathon Date' defaultValue={data.marathonDate} />
				</div>
				<div className='flex justify-between items-center'>
					<p className='text-xl'>Email</p>
					<input readOnly disabled className='input rounded-3xl' type="text" placeholder='Email' defaultValue={user.email} name='email'/>
				</div>
				<div className='flex justify-between items-center mb-2'>
					<p className='text-xl'>Contact No.</p>
					<input type="text" className='input rounded-3xl' placeholder='Phone No.' name='phoneNumber' />
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-col'>
						<p className='text-xl'>First Name</p>
						<input className='input rounded-3xl' type="text" placeholder='First Name' name='firstName' />
					</div>
					<div className='flex flex-col'>
						<p className='text-xl'>Last Name</p>
						<input type="text" className='input rounded-3xl' placeholder='Last Name' name='lastName' />
					</div>
				</div>
				<input type="submit" className='btn bg-yellow-600 w-full rounded-full mt-4 font-extralight'/>
			</form>
		</div>
	);
};

export default MarathonRegister;