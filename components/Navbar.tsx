"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const navlinks = [
  { label: "About", href: "#about" },
  { label: "How it works", href: "#htw" },
  { label: "Pricing", href: "#pricing" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
];

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!shownav);
  };

  return (
    <div>
      <nav className="w-[100%] h-[100px] flex  border-b-[1px] border-gray-900">
        <div className="w-5/6 flex items-center justify-between mx-auto">
          <div className="flex flex-row items-center gap-3">
            <img src="/logo.png" alt="logo" />
            <p className="text-white md:text-[24px] text-[16px] font-bold">
              FindTrend
            </p>
          </div>
          <div className="gap-4 hidden lg:flex">
            {navlinks.map((item) => (
              <ul className="text-white">
                <a
                  className="hover:text-hover-color transition duration-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </ul>
            ))}
          </div>
          <div className="flex gap-3 text-white items-center">
            <button className="rounded-xl border-white border p-2">
              Log in
            </button>
            <button className="bg-white text-black rounded-xl p-2 hover:scale-105 duration-500">
              Register
            </button>
            <div className="lg:hidden flex ml-4">
              <FaBars color="white" size={20} onClick={toggleNav} />
            </div>
          </div>
        </div>
      </nav>
      {shownav && (
        <div className="lg:hidden flex w-full h-[100vh] justify-center items-center bg-black text-white">
          <nav className="flex justify-center items-center flex-col">
            {navlinks.map((item) => (
              <ul className="text-white flex flex-col text-xl mb-12 border-b w-full items-center border-gray-400 ">
                <a
                  className="hover:text-hover-color transition duration-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </ul>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
