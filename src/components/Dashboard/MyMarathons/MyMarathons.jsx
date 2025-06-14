import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import MarathonEditForm from './MarathonEditForm';

const MyMarathons = () => {
	const data = useLoaderData();
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		if (formSubmitted) {
			document.getElementById('editModal').close();
		}
	}, [formSubmitted])

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
								<td>
									<div className='flex'>
										<button className='btn btn-sm text-xl bg-yellow-600 rounded-full font-extralight mr-2' onClick={() => document.getElementById('editModal').showModal()}>
											<BiEdit></BiEdit>
										</button>
										<dialog id='editModal' className='modal'>
											<div className='modal-box'>
												<form method='dialog'>
													<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
												</form>
												<h1 className='text-3xl'>Edit Marathon</h1>
												<div className='divider divider-vertical mt-0'></div>
												<MarathonEditForm marathon={marathon} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></MarathonEditForm>
											</div>
										</dialog>
										<button className='btn btn-sm bg-red-600 rounded-full font-extralight text-xl'>
											<MdDelete></MdDelete>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default MyMarathons;