import React, { useEffect, useState } from "react";
import prodFac from "../../assets/Services/prodFac.svg";
import oem from "../../assets/Services/oem.svg";
import technical from "../../assets/Services/technical.svg";
import warehouse from "../../assets/Services/warehouse.svg";
import rd from "../../assets/Services/rd.svg";
import line from "../../assets/Services/Line.svg";

const Services = () => {
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

  const renderDesktop = () => (
    <div className="flex items-center relative pl-26 text-[#173669] font-[Poppins] bg-[#F6F6FB] mt-10">
      <h2 className="text-5xl font-[300] ml-18 ">Our Services</h2>
      <div className="flex items-center ml-10 gap-9">
        <img src={line} alt="" className="ml-10" />
        <div>
          <img src={prodFac} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            Production <br /> Facility
          </p>
        </div>
        <img src={line} alt="" className="ml-8" />
        <div>
          <img src={warehouse} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            Warehousing <br /> Facility
          </p>
        </div>
        <img src={line} alt="" className="ml-8" />
        <div>
          <img src={rd} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            R&D and <br /> Testing Facility
          </p>
        </div>
        <img src={line} alt="" className="ml-8" />
        <div>
          <img src={technical} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            24x7 Technical <br /> Support
          </p>
        </div>
        <img src={line} alt="" className="ml-8" />
        <div>
          <img src={oem} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">OEM/ODM</p>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="bg-[#F6F6FB] py-8 px-4 text-[#173669] font-[Poppins]">
      <h2 className="text-3xl font-[300] mb-6 text-center">Our Services</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <img src={prodFac} alt="" className="h-12" />
          <p className="mt-2 text-sm font-[400] text-center">
            Production Facility
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={warehouse} alt="" className="h-12" />
          <p className="mt-2 text-sm font-[400] text-center">
            Warehousing Facility
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={rd} alt="" className="h-12" />
          <p className="mt-2 text-sm font-[400] text-center">
            R&D and Testing Facility
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={technical} alt="" className="h-12" />
          <p className="mt-2 text-sm font-[400] text-center">
            24x7 Technical Support
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={oem} alt="" className="h-12" />
          <p className="mt-2 text-sm font-[400] text-center">OEM/ODM</p>
        </div>
      </div>
    </div>
  );

  return <>{isMobile ? renderMobile() : renderDesktop()}</>;
};

export default Services;
