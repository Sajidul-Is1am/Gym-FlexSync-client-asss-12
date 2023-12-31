import "./Banner.css";
import useAuth from "../../../Hooks/useAuth";
// import { MdOutlineLastPage } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";
import Aos from "aos";

const Banner = () => {
  // aos
  useEffect(() => {
    AOS.init();
    Aos.init({
      duration:1200
    });
  }, []);
  // aos
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 justify-between items-center  relative bg-[#1d232a] pt-6">
      <div className=" ml-8 sm:ml-6 md:ml-14 lg:ml-20 xl:ml-24 z-10">
        <h1
          data-aos="fade-up"
          className=" lg:text-8xl text-5xl font-bold text-white mb-4 "
        >
          Your Fitness Journey Starts Here!
        </h1>
        <p className=" text-base font-semibold text-white ">
          Track Your Progress, Achieve Your Goals, Transform Your Life.
        </p>
        <button className="bg-secondary btn btn-lg md:px-20 border-b-4 border-white text-white mt-10">
          Explore Classes
        </button>
      </div>
      <div data-aos="zoom-in" className="bannerImgRight  ">
        <img src="https://i.ibb.co/BqXC79J/Asset04.png" alt="" />
      </div>
      <div className="ml-0 absolute bottom-0 left-0 w-4/6 h-[600px] bg-gradient-to-tr from-secondary to-transparent via-transparent opacity-30 "></div>
    </div>
  );
};

export default Banner;
