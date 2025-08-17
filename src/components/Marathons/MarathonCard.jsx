import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FaLocationPin } from 'react-icons/fa6';
import { Link } from 'react-router';

const MarathonCard = ({ data }) => {
  const [marathonDate] = data.marathonDate.split('T');
  const [startRegistrationDate] = data.startRegistrationDate.split('T');
  const [endRegistrationDate] = data.endRegistrationDate.split('T');

  return (
    <div className="relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={data.marathonImage}
        alt={data.marathonTitle}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col">
        <h2 className="text-xl sm:text-2xl font-medium text-white truncate">
          {data.marathonTitle}
        </h2>

        <div className="flex items-center gap-2 text-white text-sm mt-1">
          <FaLocationPin className="text-red-400" />
          <p>{data.location}</p>
        </div>

        <div className="flex items-center gap-2 text-white text-sm mt-1">
          <BiCalendar />
          <p>{marathonDate}</p>
        </div>

        <p className="text-gray-300 text-xs mt-2">
          Registration: {startRegistrationDate} - {endRegistrationDate}
        </p>

        <Link
          to={`/marathon/${data._id}`}
          className="mt-3 bg-yellow-500 text-green-950 font-semibold py-2 rounded-full text-center hover:bg-green-950 hover:text-white transition-colors text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MarathonCard;
