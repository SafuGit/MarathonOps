import React from 'react';
import MarathonCard from '../Marathons/MarathonCard';

const HomeMarathons = ({ data }) => {
  return (
    <section className="w-[90vw] mx-auto py-16">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-green-950 mb-2">
          Upcoming Marathons
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the latest running events and join a community of passionate runners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((marathon, index) => (
          <MarathonCard key={index} data={marathon} />
        ))}
      </div>
    </section>
  );
};

export default HomeMarathons;
