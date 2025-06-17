import React, { use } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const ApplicationEditForm = ({data, setFormSubmitted}) => {
  const user = use(AuthContext);
  const navigate = useNavigate();
  console.log(data);

  const handleApplicationUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const [ firstName, lastName, phoneNumber, email ] = [form.firstName, form.lastName, form.phoneNumber, form.email];
		const registrationData = {
			firstName: firstName.value,
			lastName: lastName.value,
			phoneNumber: phoneNumber.value,
      email: email.value,
		}
    setFormSubmitted(true);
		axios.put(`http://localhost:3000/applications/${data.applicationId}`, registrationData)
			.then(res => {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'You have successfully updated application for the marathon!',
				}).then(() => {
					form.reset();
          // navigate('');
				});
			})
			.catch(err => {
				console.error(err);
				Swal.fire({
					icon: 'error',
					title: 'Oops',
					text: 'Something went wrong Please try again later',
				});
			});
	}

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={handleApplicationUpdate}>
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
					<input type="text" className='input rounded-3xl' placeholder='Phone No.' name='phoneNumber' defaultValue={data.phoneNumber} />
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-col'>
						<p className='text-xl'>First Name</p>
						<input className='input rounded-3xl' type="text" placeholder='First Name' name='firstName' defaultValue={data.firstName} />
					</div>
					<div className='flex flex-col'>
						<p className='text-xl'>Last Name</p>
						<input type="text" className='input rounded-3xl' placeholder='Last Name' name='lastName' defaultValue={data.lastName} />
					</div>
				</div>
				<input type="submit" className='btn bg-yellow-600 w-full rounded-full mt-4 font-extralight'/>
      </form>
    </div>
  );
};

export default ApplicationEditForm;