import React, { useEffect, useState } from 'react';
import { BiEdit, BiFilter, BiSort } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import MarathonEditForm from './MarathonEditForm';
import axios from 'axios';

const MyMarathons = () => {
	const data = useLoaderData();
	const [formSubmitted, setFormSubmitted] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (formSubmitted) {
			document.getElementById('editModal').close();
		}
	}, [formSubmitted])

	const handleDelete = (marathonId) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You wont be able to undo this.",
			icon: 'warning',
			showCancelButton: true,
			showConfirmButton: true,
			confirmButtonText: 'Yes, Delete it.',
			cancelButtonText: 'No, Cancel it.',
		}).then((result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:3000/marathons/${marathonId}`)
					.then(response => {
						if (response.status === 200) {
							Swal.fire({
								title: 'Deleted!',
								text: 'Marathon deleted successfully.',
								icon: 'success',
							}).then(() => {
								navigate('');
							})
						} else {
							Swal.fire({
								title: 'Error!',
								text: 'Failed to delete marathon.',
								icon: 'error',
							});
						}
					}).catch(error => {
						console.error('Error deleting marathon:', error);
						Swal.fire({
							title: 'Error!',
							text: 'An error occurred while deleting the marathon.',
							icon: 'error',
						});
					});
			}
		})
	}

	return (
		<>
			<div className='flex gap-3 items-start mb-2'>
				<h1 className='text-3xl'>My Marathons</h1>
				<button className='btn bg-yellow-600 rounded-full text-xl'>Sort <BiFilter></BiFilter> </button>
			</div>
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
											<form method="dialog" className="modal-backdrop">
												<button>close</button>
											</form>
										</dialog>
										<button className='btn btn-sm bg-red-600 rounded-full font-extralight text-xl' onClick={() => handleDelete(marathon._id)}>
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