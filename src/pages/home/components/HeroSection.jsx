import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-pink-400 p-10 h-96 grid place-items-center text-center">
        <div className="text-center text-white shadow-md max-w-lg bg-white bg-opacity-20 p-5 rounded-xl">
          <div className="text-4xl font-bold">
            <h2>Programming in reality is</h2>
            <h2>actually easy</h2>
          </div>
          <p className="max-w-md mx-auto mt-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            commodi exercitationem omnis voluptatum sed ipsa nesciunt, minima
            amet? Odit nemo nihil suscipit aut quae unde!
          </p>
        </div>
        <div className="mt-5">
          <button className="bg-white p-2 rounded-full bg-opacity-30 text-white hover:bg-opacity-50 transition-colors duration-300">
            <MdOutlineKeyboardDoubleArrowDown size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
