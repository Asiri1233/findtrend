import React from "react";
import Marquee from "react-fast-marquee";

const Platforms = () => {
  return (
    <div className="bg-white">
      <h1 className="text-center text-4xl font-bold font-Poppins pt-4">
        All platform connect to Findtrend
      </h1>
      <div>
        <Marquee>
          <img src="linkedin-slider.png" className="ml-4" alt="" />
          <img src="reddit-slider.png" alt="" />
          <img src="dribble-slider.png" alt="" className="p-8" />
          <img src="m-slider.png" alt="" />
          <img src="wk-slider.png" alt="" />
          <img src="pinterest-slider.png" alt="" className="p-8" />
          <img src="twitter-slider.png" alt="" className="p-8" />
        </Marquee>
      </div>
    </div>
  );
};

export default Platforms;
