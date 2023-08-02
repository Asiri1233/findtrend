import React from "react";

const CTA = () => {
  return (
    <div className="bg-bg-green pt-12 mt-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-bold md:text-7xl text-3xl text-center text-black font-Poppins font-bold">
          Join us on email for
        </h1>
        <h1 className="font-Poppins md:text-7xl text-center text-gray-500 opacity-50 text-3xl font-bold">
          more trending topics
        </h1>
        <button className="bg-black text-white rounded-xl text-bold font-Poppins mt-4 p-4 mb-4">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default CTA;
