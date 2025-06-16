import axios from 'axios';
import React, { useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyApplications = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleDeleteApplication = (appId) => {
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
				axios.delete(`http://localhost:3000/applications/${appId}`)
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
      <div className='w-full flex justify-between mb-2'>
        <h1 className='text-3xl'>My Apply List</h1>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#BEE6F2]">
				<table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Marathon Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((app, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{app.marathonTitle}</td>
                <td>{app.firstName}</td>
                <td>{app.lastName}</td>
                <td>{app.phoneNumber}</td>
                <td>{app.email}</td>
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
												<h1 className='text-3xl'>Edit Application</h1>
												<div className='divider divider-vertical mt-0'></div>
												{/*TODO: put dialog form here */}
											</div>
											<form method="dialog" className="modal-backdrop">
												<button>close</button>
											</form>
										</dialog>
										<button className='btn btn-sm bg-red-600 rounded-full font-extralight text-xl' onClick={() => handleDeleteApplication(app.applicationId)}>
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

export default MyApplications;