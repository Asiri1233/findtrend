import React from "react";
import { TiTick } from "react-icons/ti";
interface SalesCardProps {
  planName: string;
  description: string;
  price: number;
  backgroundColor?: boolean;
}

const SalesCard: React.FC<SalesCardProps> = ({
  planName,
  description,
  price,

  backgroundColor,
}) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div
        className={`w-[339px] h-[602px] md:w-[360px] md:h-[640px] ${
          backgroundColor ? "bg-bg-green" : "bg-white"
        } rounded-xl border-gray-400 border-b border`}
      >
        <div className="flex justify-start ml-2 flex-col p-3">
          <h1 className="text-black text-[36px] font-Poppins">{planName}</h1>
          <h1 className="text-black text-[18px] font-Poppins">{description}</h1>
          <div className="flex gap-2 mt-4 items-center">
            <h1 className="text-[64px]">${price}</h1>
            <p>/Month</p>
          </div>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex items-center">
              <TiTick size={30} />
              <p>Up to 5 page each group</p>
            </div>
            <div className="flex items-center">
              <TiTick size={30} />
              <p>Up to 10 group page</p>
            </div>
            <div className="flex items-center">
              <TiTick size={30} />
              <p>5 Days group page saved</p>
            </div>
            <div className="flex items-center">
              <TiTick size={30} />
              <p>Download page up to 20 page</p>
            </div>
            <div className="flex items-center">
              <TiTick size={30} />
              <p>Unlimited page each group</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button
            className={`text-black ${
              backgroundColor ? " rounded-xl bg-black text-white" : ""
            } bg-bg-green p-4 w-[200px] rounded-xl`}
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
