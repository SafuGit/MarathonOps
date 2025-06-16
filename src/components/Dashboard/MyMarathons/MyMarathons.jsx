import React, { use, useEffect, useState } from 'react';
import { BiEdit, BiFilter, BiSort } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { data, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import MarathonEditForm from './MarathonEditForm';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthContext';

const sortMarathonByNew = (email) => { 
  return fetch(`http://localhost:3000/marathonSort/newest/${email}`, {
    credentials: 'include',
  }).then(res => res.json())
}

const sortMarathonByOld = (email) => {
  return fetch(`http://localhost:3000/marathonSort/oldest/${email}`, {
    credentials: 'include',
  }).then(res => res.json())
}

const MyMarathons = () => {
  const { user } = use(AuthContext);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const navigate = useNavigate();

  const [data, setData] = useState(useLoaderData());
  const [newestMarathons, setNewestMarathons] = useState([]);
  const [oldestMarathons, setOldestMarathons] = useState([]);
  const [currentSort, setCurrentSort] = useState('newest');

  const handleSortClick = () => {
    if (currentSort === 'newest') {
      setCurrentSort('oldest');
      setData(oldestMarathons);
    } else if (currentSort === 'oldest') {
      setCurrentSort('newest');
      setData(newestMarathons);
    }
  }

  useEffect(() => {
    if (user.email) {
      sortMarathonByNew(user.email).then(data => {
        setNewestMarathons(data);
      })
      sortMarathonByOld(user.email).then(data => {
        setOldestMarathons(data);
      })
    }
  }, [user]);

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
			<div className='flex items-start mb-2'>
				<h1 className='text-3xl mr-3'>My Marathons</h1>
				<button onClick={handleSortClick} className='btn bg-yellow-600 rounded-full text-xl font-extralight'>Sort <BiFilter></BiFilter> </button>
        <p className='ml-1'>({currentSort})</p>
			</div>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#BEE6F2]">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Title</th>
							<th>Location</th>
							<th>Date</th>
              <th>Created At</th>
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
                <td>{marathon.createdAt}</td>
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