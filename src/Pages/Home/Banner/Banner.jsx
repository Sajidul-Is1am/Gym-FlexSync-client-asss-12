import "./Banner.css";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-6 xl:gap-8 justify-between items-center  relative ">
      <div className=" ml-8 sm:ml-6 md:ml-14 lg:ml-20 xl:ml-24">
        <h1 className=" lg:text-8xl md:text-5xl text-3xl font-bold text-white mb-4 ">
          Your Fitness Journey Starts Here!
        </h1>
        <p className=" text-base font-semibold text-white ">
          Track Your Progress, Achieve Your Goals, Transform Your Life
        </p>
      </div>
      <div className="bannerImgRight">
        <img src="https://i.ibb.co/BqXC79J/Asset04.png" alt="" />
      </div>
      <div className="ml-0 absolute bottom-0 left-0 w-4/6 h-[600px] bg-gradient-to-tr from-secondary to-transparent via-transparent opacity-40 "></div>
    </div>
  );
};

export default Banner;
