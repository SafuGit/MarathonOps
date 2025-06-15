import React, { use, useState } from 'react';
import './AddMarathon.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

const AddMarathon = () => {
  const navigate = useNavigate();
  const {user} = use(AuthContext);

  const [startRegistrationDate, setStartRegistrationDate] = useState(new Date());
  const handleStartRegistrationDate = (date) => {
    setStartRegistrationDate(date);
  }
  const [endRegistrationDate, setEndRegistrationDate] = useState(new Date());
  const handleEndRegistrationDate = (date) => {
    setEndRegistrationDate(date);
  }

  const [marathonDate, setMarathonDate] = useState(new Date());
  const handleMarathonDate = (date) => {
    setMarathonDate(date);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      marathonTitle: form.marathonTitle.value,
      runningDistance: form.runningDistance.value,
      startRegistrationDate: dayjs(startRegistrationDate).format('DD/MM/YYYY'),
      endRegistrationDate: dayjs(endRegistrationDate).format('DD/MM/YYYY'),
      marathonDate: dayjs(marathonDate).format('DD/MM/YYYY'),
      location: form.location.value,
      description: form.description.value,
      marathonImage: form.marathonImage.value,
      createdAt: dayjs().format('DD/MM/YYYY'),
      registrationCount: 0,
      registeredUsers: [],
      createdBy: user.email,
    }
    axios.post('http://localhost:3000/marathons', data)
      .then(response => {
        if (response.status === 201) {
          Swal.fire({
            title: 'Success!',
            text: 'Marathon added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          form.reset();

          setStartRegistrationDate(new Date());
          setEndRegistrationDate(new Date());
          setMarathonDate(new Date());

          navigate('');
        }
      })
      .catch(error => {
        console.error("There was an error adding the marathon!", error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error adding the marathon.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }

  return (
    <div className='w-full flex flex-col items-cente'>
      <div className='w-[90%] rounded-2xl border-2 border-black' id='container'>
        <h1 className='text-3xl text-white text-center mt-4'>Add Marathon ✅</h1>
        <form onSubmit={handleSubmit}>
          <div className='md:grid md:grid-cols-2 p-12 gap-4' id='formGrid'>
            <div className='flex flex-col w-full'>
              <label className='label'>Marathon Title</label>
              <input type="text" name='marathonTitle' placeholder='Marathon Title' className='input rounded-lg w-full' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>Running Distance</label>
              <select defaultValue="Pick a Distance" className='select rounded-lg w-full' name='runningDistance'>
                <option disabled={true}>Pick a Distance</option>
                <option value={'3k'}>3k</option>
                <option value={'10k'}>10k</option>
                <option value={'25k'}>25k</option>
              </select>
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>Start Registration Date</label>
              <DatePicker
                className='select rounded-lg w-full'
                selected={startRegistrationDate}
                onChange={(date) => handleStartRegistrationDate(date)}
              ></DatePicker>
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>End Registration Date</label>
              <DatePicker
                className='select rounded-lg w-full'
                selected={endRegistrationDate}
                onChange={(date) => handleEndRegistrationDate(date)}
              ></DatePicker>
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>Marathon Date</label>
              <DatePicker
                className='select rounded-lg w-full'
                selected={marathonDate}
                onChange={(date) => handleMarathonDate(date)}
              ></DatePicker>
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>Marathon Location</label>
              <input type="text" name='location' placeholder='Marathon Location' className='input rounded-lg w-full' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>Marathon Description</label>
              <textarea name="description" placeholder='Description' className='input rounded-lg w-full'></textarea>
            </div>
            <div className='flex flex-col w-full mb-8 md:mb-0'>
              <label className='label'>Marathon Image</label>
              <textarea type="text" name='marathonImage' className='input rounded-lg w-full' placeholder='Image URL'/>
            </div>
            <div className='flex flex-col w-full col-span-2'>
              <input type="submit" className='btn bg-yellow-700 w-full font-extralight' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;