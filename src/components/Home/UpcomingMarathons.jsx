import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { BiCalendar } from "react-icons/bi";

const UpcomingMarathons = ({ dataPromise }) => {
  const data = React.use(dataPromise);

  return (
    <section className="w-[90vw] mx-auto my-20">
      <h2 className="text-5xl font-bold text-center mb-12">
        Upcoming Marathons
      </h2>

      <div className="flex flex-col gap-16">
        {data.map((marathon, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={marathon.marathonImage}
                  alt={marathon.marathonTitle}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:w-1/2 bg-white p-8 rounded-3xl shadow-md flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-green-950">
                  {marathon.marathonTitle}
                </h3>
                <div className="flex items-center gap-2 mb-2 text-gray-700">
                  <FaLocationPin className="text-red-500" />
                  <p>{marathon.location}</p>
                </div>
                <div className="flex items-center gap-2 mb-4 text-gray-700">
                  <BiCalendar className="text-lg" />
                  <p>{marathon.marathonDate}</p>
                </div>
                <p className="text-gray-600 mb-6">
                  Join runners from around the world and challenge yourself in an
                  unforgettable experience.
                </p>
                <button className="bg-yellow-500 text-green-950 font-semibold py-2 rounded-full w-1/2 hover:bg-green-950 cursor-pointer hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingMarathons;
