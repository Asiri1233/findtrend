import React from "react";

const footerLinks = [
  { label: "Privacy Policy" },
  { label: "Terms and Conditions" },
  { label: "Contact Us" },
  { label: "Careers" },
];

const Footer = () => {
  return (
    <div className="bg-white mx-auto w-5/6 p-10 h-[100px] text-black flex md:flex-row justify-between items-center flex-col">
      <div className="flex flex-row items-center gap-4 mt-4">
        <img src="Vector.png" alt="footer logo" />
        <h1 className="text-xl">Findtrend</h1>
      </div>
      <div className="flex md:flex-row items-center flex-col gap-4 mt-12">
        {footerLinks.map((item) => (
          <ul key={item.label}>{item.label}</ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
