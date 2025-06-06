import React from 'react';
import './AddMarathon.css';

const AddMarathon = () => {
  return (
    <div className='w-full flex flex-col items-cente'>
      <div className='w-[90%] rounded-2xl border-2 border-black' id='container'>
        <h1 className='text-3xl text-white text-center mt-4'>Add Marathon ✅</h1>
        <form action="">
          <div className='grid grid-cols-2 p-4' id='formGrid'>
            <div className='flex flex-col w-full'>
              <label className='label'>Marathon Title</label>
              <input type="text" name='marathonTitle' placeholder='Marathon Title' className='input rounded-lg' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>Running Distance</label>
              <select defaultValue="Pick a Distance" className="select rounded-lg" name='runningDistance'>
                <option disabled={true}>Pick a Distance</option>
                <option value={'3k'}>3k</option>
                <option value={'10k'}>10k</option>
                <option value={'25k'}>25k</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;