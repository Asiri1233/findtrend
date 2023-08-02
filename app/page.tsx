import CTA from "@/components/CTA";
import Cards from "@/components/Cards";
import Description from "@/components/Description";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OpenNewTab from "@/components/OpenNewTab";
import Platforms from "@/components/Platforms";
import Startup from "@/components/Startup";
import Tweets from "@/components/Tweets";
import React from "react";

const page = () => {
  return (
    <div className="h-[100%] bg-cover object-cover bg-no-repeat bg-[url('/Ornament.svg')] bg-black relative">
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <OpenNewTab />
      </div>
      <div>
        <Description />
      </div>
      <div>
        <Startup />
      </div>
      <div>
        <Platforms />
      </div>
      <div>
        <Tweets />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <CTA />
      </div>
    </div>
  );
};

export default page;
