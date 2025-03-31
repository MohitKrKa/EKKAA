import React, { useState, useEffect } from "react";
import aboutimg from "../../assets/About/About.png";
import aboutbg from "../../assets/About/Aboutbg.png";
import box from "../../assets/About/box.svg";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderDesktopView = () => (
    <div className="relative flex">
      <img
        src={aboutimg}
        alt="About"
        className="w-full absolute top-0 left-0 z-[-1]"
      />
      <img src={aboutbg} alt="About Background" className="w-full relative" />

      {/* Desktop Text Overlay */}
      <div className="absolute top-1/3 p-24 left-24 text-white text-start">
        <h1 className="font-Poppins font-[275] text-6xl leading-[1.2]">
          ABOUT EKKAA
        </h1>
        <br />
        <p className="font-Poppins font-[200] leading-7 text-[1.3rem]">
          Ekkaa Electronics powers
          <br /> experiences that shape everyday
          <br /> life. Our innovations are behind
          <br /> some of the most trusted consumer
          <br /> electronics and appliances that
          <br /> make life simpler, smarter and
          <br /> more enjoyable.
        </p>
        <div className="flex relative mt-6 items-center py-2.5 text-base cursor-pointer">
          <img src={box} alt="" className="absolute" />
          <span className="ml-8 text-white">Explore us</span>
        </div>
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="relative flex">
      <img
        src={aboutimg}
        alt="About"
        className="w-full absolute top-0 left-0 z-[-1]"
      />
      <img src={aboutbg} alt="About Background" className="w-full relative" />

      {/* Mobile Text Overlay */}
      <div className="absolute top-[10%] left-5 right-5 text-white text-start">
        <h1 className="font-Poppins font-[275] text-3xl leading-[1]">
          ABOUT EKKAA
        </h1>
        <br />
        <p className="font-Poppins font-[200] leading-[1.1] text-base">
          Ekkaa Electronics powers
          <br /> experiences that shape everyday
          <br /> life. Our innovations are behind
          <br /> some of the most trusted consumer
          <br /> electronics and appliances that
          <br /> make life simpler, smarter and
          <br /> more enjoyable.
        </p>
        <button className="flex relative mt-4 items-center  text-sm cursor-pointer">
          <img src={box} alt="" className="absolute w-22 h-auto" />
          <span className="pl-2 pr-2 text-white">Explore us</span>
        </button>
      </div>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default About;
