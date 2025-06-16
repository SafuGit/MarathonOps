import axios from 'axios';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const MarathonEditForm = ({marathon, formSubmitted, setFormSubmitted}) => {
  dayjs.extend(customParseFormat);
	const [startRegistrationDate, setStartRegistrationDate] = useState(dayjs(marathon.startRegistrationDate, 'DD/MM/YYYY').toDate());
	const handleStartRegistrationDate = (date) => {
		setStartRegistrationDate(date);
	}
	const [endRegistrationDate, setEndRegistrationDate] = useState(dayjs(marathon.endRegistrationDate, 'DD/MM/YYYY').toDate());
	const handleEndRegistrationDate = (date) => {
		setEndRegistrationDate(date);
	}
	const navigate = useNavigate();

	const handleEditSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const data = {
			// marathonTitle: form.marathonTitle.defaultValue,
			runningDistance: form.runningDistance.value,
			startRegistrationDate: dayjs(startRegistrationDate).format('DD/MM/YYYY'),
			endRegistrationDate: dayjs(endRegistrationDate).format('DD/MM/YYYY'),
			// marathonDate: dayjs(marathonDate).format('DD/MM/YYYY'),
			location: form.location.value,
			description: form.description.value,
			marathonImage: form.marathonImage.value,
			// createdAt: dayjs().format('DD/MM/YYYY'),
			// registrationCount: 0,
			// registeredUsers: [],
			// createdBy: user.email,
		}
		setFormSubmitted(true);
		axios.put(`http://localhost:3000/marathons/${marathon._id}`, data)
			.then(response => {
				if (response.status === 200) {
					console.log(response.data);
					Swal.fire({
						title: 'Success!',
						text: 'Marathon updated successfully.',
					}).then(() => {
						form.reset();
						setStartRegistrationDate(new Date());
						setEndRegistrationDate(new Date());
						navigate('');
					})
				} else {
					alert('Failed to update marathon.');
				}
			})
			.catch(error => {
				console.error('Error updating marathon:', error);
				alert('An error occurred while updating the marathon.');
			});
	}

	return (
		<div>
			<form className='flex flex-col gap-4' onSubmit={handleEditSubmit}>
				<div className='flex flex-col'>
					<label className='label'>Marathon Title</label>
					<input readOnly disabled type="text" className='input rounded-lg w-full' defaultValue={marathon.marathonTitle} name='marathonTitle'/>
				</div>
				<div className='flex flex-col'>
					<label className='label'>Running Distance</label>
					<select className='select rounded-lg w-full' defaultValue={marathon.runningDistance} name='runningDistance'>
						<option value={'3k'}>3k</option>
						<option value={'10k'}>10k</option>
						<option value={'25k'}>25k</option>
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='label'>Start Registration Date</label>
					<DatePicker 
            dateFormat='dd/MM/yyyy'
						className='select rounded-lg w-full'
						selected={startRegistrationDate}
						onChange={(date) => handleStartRegistrationDate(date)}
					></DatePicker>
				</div>
				<div className='flex flex-col'>
					<label className='label'>End Registration Date</label>
					<DatePicker 
            dateFormat='dd/MM/yyyy'
						className='select rounded-lg w-full'
						selected={endRegistrationDate}
						onChange={(date) => handleEndRegistrationDate(date)}
					></DatePicker>
				</div>
				<div className='flex flex-col'>
					<label className='label'>Marathon Date</label>
					<input readOnly disabled type="text" className='input rounded-lg w-full' defaultValue={marathon.marathonDate} name='marathonDate'/>
				</div>
				<div className='flex flex-col'>
					<label className='label'>Marathon Location</label>
					<input type="text" className='input rounded-lg w-full' defaultValue={marathon.location} name='location'/>
				</div>
				<div className='flex flex-col'>
					<label className='label'>Marathon Description</label>
					<textarea className='input rounded-lg w-full' defaultValue={marathon.description} name='description'/>
				</div>
				<div className='flex flex-col'>
					<label className='label'>Marathon Image</label>
					<textarea className='input rounded-lg w-full' defaultValue={marathon.marathonImage} name='marathonImage'/>
				</div>
				<div className='dialog'>
					<button type="submit" className='btn bg-yellow-600 w-full rounded-full mt-4'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default MarathonEditForm;