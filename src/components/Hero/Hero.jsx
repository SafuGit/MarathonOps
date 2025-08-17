import { BiArrowToRight } from "react-icons/bi";
import "./Hero.css";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        {/* Images */}
        <div className="flex items-center gap-6">
          <img
            src="/assets/marathonRunnerCrop.png"
            className="max-w-md rounded-lg shadow-lg"
            alt="Runner using app"
          />
          <img
            src="/assets/marathonRunner2Crop.png"
            alt="Community running event"
            className="hidden lg:block max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full text-center sm:text-left">
          <h1 className="sm:text-6xl text-4xl font-bold text-green-950 leading-tight">
            Powering Runners,  
            <span className="text-yellow-500"> Everywhere.</span>
          </h1>

          <p className="pb-6 pt-4 sm:w-3/4 text-gray-600 text-lg font-light">
            MarathonOps is the all-in-one platform for runners and clubs.  
            Track progress, join events, and connect with a global community that runs on passion and purpose.
          </p>

          <Link
            to="/register"
            className="btn bg-yellow-500 rounded-full px-8 py-4 text-lg font-medium text-green-950 hover:text-white hover:bg-green-950 transition-all"
          >
            Get Started <BiArrowToRight className="ml-2" />
          </Link>

          <div className="flex justify-center sm:justify-start mt-12">
            <div id="sd-container">
              <div className="arrow"></div>
              <div className="arrow"></div>
              <p className="mt-4 text-gray-400 text-sm text-center">Scroll</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
