import React from 'react';
import { motion } from 'motion/react';

const programs = [
  {
    title: "Group Running",
    description: "Join our vibrant community for guided group runs designed to boost stamina, build consistency",
		imageUrl: "https://hips.hearstapps.com/hmg-prod/images/a-mcadams-80-64591ecabd6d9.jpg",
  },
  {
    title: "Strength Training",
    description: "Empower your body with structured workouts led by certified coaches.",
		imageUrl: "https://www.insidefitnessmag.com/cdn/shop/articles/strength-training-techniques-for-beginners-812748.jpg?v=1717177372",
  },
  {
    title: "Mindful Mobility",
    description: "Enhance your flexibility and mental clarity through sessions that combine stretching.",
		imageUrl: "https://prowess.org.uk/wp-content/uploads/2023/10/pexels-diego-madrigal-539694.jpg",
  }
];

const OurPrograms = () => {
	return (
		<div className='flex justify-between w-[90vw] mx-auto mt-25 mb-15 gap-2'>
			<motion.div
				className="sticky top-32 h-fit self-start"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className='text-5xl mb-8'>OUR PROGRAMS & SERVICES</h1>
				<button className="btn bg-yellow-500 rounded-full p-6 text-md text-green-950 hover:text-white hover:bg-green-950 z-10 relative">ALL SERVICES</button>
			</motion.div>
			<div className='flex flex-col gap-6 w-[70%]'>
				{programs.map((program, index) => (
					<div key={index} className='p-8 rounded-4xl shadow-md' style={{
						backgroundImage: `url('${program.imageUrl || "https://placehold.co/600x400"}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
						<div className='w-[30%] bg-white p-5 rounded-4xl'>
							<h2 className='text-2xl font-semibold mb-2'>{program.title}</h2>
							<p className='text-gray-700 text-sm'>{program.description}</p>
							<button className='btn btn-ghost text-start p-0 font-light rounded-4xl'>LEARN MORE</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurPrograms;