import React from "react";
import SalesCard from "./SalesCard";

const Cards = () => {
  return (
    <div className="bg-black pt-8">
      <div className="flex flex-col">
        <h1 className="text-white text-center font-bold font-Poppins md:text-7xl text-3xl">
          Get your best deal
        </h1>
        <div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <p className="text-white md:text-[24px]">Monthly</p>
            <label className="flex cursor-pointer select-none items-center ">
              <div className="relative">
                <input type="checkbox" id="toggleTwo" className="sr-only" />
                <div className="block h-8 w-14 rounded-full bg-gray-300"></div>
                <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-bg-green transition"></div>
              </div>
            </label>
            <p className="text-gray-200 md:text-[24px]">Yearly</p>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-12 justify-center items-center">
          <SalesCard
            planName={"Personal"}
            description={"Special first packet for all"}
            price={8}
          />
          <SalesCard
            backgroundColor
            planName={"Regular"}
            description={"Recommended for personal pro"}
            price={20}
          />
          <SalesCard
            planName={"Premium"}
            description={"Packet for Startup & Company"}
            price={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
