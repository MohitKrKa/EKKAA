import React from "react";
import talktoExpert from "../../assets/Header/talktoExpert.svg";

const Hero = () => {
  return (
    <div className="flex relative flex-col justify-center items-center px-20 py-0 h-screen text-center text-white bg-[#011E4D] max-md:px-10 max-md:py-0">
      <div>
        <h1 className="mb-8 text-5xl text-[#E6AF2E] font-[poppins] font-[275] max-sm:text-4xl">
          Bridging Technology, Empowering Brands
        </h1>
        <p className=" leading-8 font-[poppins] font-[400] text-[#FFFFFF">
          EKKAA's innovative range of consumer electronics and appliances blends
          advanced technology with world-class
          <br /> R&D to deliver seamless, turnkey solutions designed to elevate
          lifestyle and transform everyday living, globally.
        </p>
      </div>
      <button className="flex relative mt-10 md:hidden pr-12 items-center px-5 py-2.5 text-base cursor-pointer sm:mr-0 mr-4">
        <img src={talktoExpert} alt="" className="absolute" />
        <span className="ml-5 text-white">Talk to expert</span>
      </button>
    </div>
  );
};

export default Hero;
