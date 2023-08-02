import React from "react";

const OpenNewTab = () => {
  return (
    <div className="bg-bg-green pb-5">
      <div className="flex flex-col">
        <h1 className="text-center font-Poppins font-bold md:text-[72px] mt-20 text-[32px]">
          Open new tabs is sh*t
        </h1>
        <div className="flex justify-center">
          <div className="bg-white md:w-[500px] md:h-[200px] w-[339px] h-[118px] mt-4 flex justify-center items-center rounded-md">
            <div className="flex items-center justify-center">
              <img src="opens-log.png" alt="logo-logo" />
            </div>
          </div>
          {/* <div className="absolute md:block hidden  right-[10%]">
            <p>You need one tab</p>
            <img src="ytot.png" className="" alt="arrow" />
          </div>
          <div className="absolute top-[90%] hidden md:block left-[10%]">
            <img src="soff.png" className="" alt="" />
            <p>solution for discover a trend</p>
          </div> */}
        </div>
        <div className="mt-10">
          <p className="font-Poppins text-center md:text-xl font-semibold">
            A solution for your browser tabs and don’t make your device get{" "}
            <br />
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenNewTab;
