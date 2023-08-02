import React from "react";

const HeroSection = () => {
  return (
    <div className=" mx-auto h-[100vh] w-full  ">
      <div className="flex flex-col justify-center mt-20">
        <h1 className="text-white text-center md:text-[72px] text-[36px] font-Poppins">
          Minimize your tabs. <br /> Find the trends !
        </h1>
        <h3 className="text-gray-300 text-center text-sm md:text-lg font-Poppins ">
          Don’t let your computer memories consumes <br className="md:hidden" />
          all of those browser tabs. <br className="md:hidden" />
          <br className="hidden md:block" />
          Findtrend let you gathers all of your favorite{" "}
          <br className="md:hidden" />
          website into one place.
        </h3>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="bg-bg-green text-black rounded-[40px] p-4 md:text-[18px] text-sm">
          Get Started 🔥
        </button>
      </div>
      <div className="ml-4 absolute top-[30%] right-[600px] hidden 2xl:block">
        <p className="text-white mb-2">All research starts from here</p>
        <img src="/arrow.png" alt="arrow" />
      </div>

      <div className="mt-20 md:flex hidden justify-center">
        <img src="btn-hero.png" alt="btns" />
      </div>
      <div className="md:hidden flex justify-center mt-8 flex-col  items-center">
        <img
          src="twitter-btn.png"
          alt="twitter"
          className="w-[250px]  flex items-center justify-center"
        />
        <img src="pin-btn.png" alt="pin" className="w-[250px]" />
        <img src="fb.png" alt="facebook" className="w-[250px]" />
        <img src="dribble.png" alt="dribble" className="w-[250px]" />
      </div>
    </div>
  );
};

export default HeroSection;
