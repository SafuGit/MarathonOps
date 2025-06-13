import React from 'react';
import { useLoaderData } from 'react-router';

const MyMarathons = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<h1 className='text-3xl mb-2'>My Marathons</h1>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#BEF2C6]">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Title</th>
							<th>Location</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((marathon, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{marathon.marathonTitle}</td>
								<td>{marathon.location}</td>
								<td>{marathon.marathonDate}</td>
								<td></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default MyMarathons;