import { BiArrowToRight } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/marathonRunnerCrop.png"
          className="max-w-xl rounded-lg"
        />
        <img src="/assets/marathonRunner2Crop.png" alt="" className='hidden lg:block' />
        <div className='w-full text-center sm:text-start'>
          <h1 className="sm:text-8xl text-6xl font-bold text-green-950 w-full inline">THE ULTIMATE <br /> <span className='italic'> MARATHON APP </span></h1>
          <p className="pb-6 pt-2 sm:w-1/2 text-gray-500 font-extralight">
            Welcome to the vibrant world of MarathonOps, a running club that not only embraces the thrill of the open road but also cultivates a tight-knit community of passionate runners.
          </p>
          <button className="btn bg-yellow-500 rounded-full p-8 text-xl text-green-950 hover:text-white hover:bg-green-950 z-10 relative">JOIN OUR APP <BiArrowToRight></BiArrowToRight></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;