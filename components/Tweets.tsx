import React from "react";

const Tweets = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <div>
        <img src="/tweet-1.png" alt="" />
        <img src="/tweet-2.png" alt="" />
        <img src="/tweet-3.png" alt="" />
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white rounded-xl text-bold font-Poppins mt-4 p-4 mb-4">
          View More Trend
        </button>
      </div>
    </div>
  );
};

export default Tweets;
