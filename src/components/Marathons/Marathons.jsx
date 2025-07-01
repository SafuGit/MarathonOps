import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MarathonCard from './MarathonCard';
import { BiSort } from 'react-icons/bi';

const Marathons = () => {
	const [data, setData] = useState(useLoaderData());

  const handleSort = (sortType) => {
    if (sortType === 'asc') {
      const sortedData = [...data].sort((a, b) => a.marathonTitle.localeCompare(b.marathonTitle));
      setData(sortedData);
    } else if (sortType === 'desc') {
      const sortedData = [...data].sort((a, b) => b.marathonTitle.localeCompare(a.marathonTitle));
      setData(sortedData);
    }
  }

	return (
		<div className='w-[90vw] mx-auto flex flex-col items-center justify-center my-10'>
			<div className='flex gap-4 w-[90vw]'>
        <h1 className='text-3xl sm:text-4xl font-bold'>MARATHON EVENTS COMING UP INCLUDE</h1>
        <details className="dropdown ">
          <summary className="btn btn-ghost btn-circle m-1"><BiSort className='text-3xl'></BiSort></summary>
          <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm absolute right-0">
            <li><a onClick={() => handleSort('asc')}>Sort A-Z</a></li>
            <li><a onClick={() => handleSort('desc')}>Sort Z-A</a></li>
          </ul>
        </details>
      </div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8'>
				{data.map((marathon, index) => (
					<MarathonCard key={index} data={marathon}></MarathonCard>
				))}
			</div>
		</div>
	);
};

export default Marathons;