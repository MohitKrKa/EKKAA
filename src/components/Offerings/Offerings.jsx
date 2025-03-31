import React from "react";
import im from "../../assets/Offerings/image.png";
import im1 from "../../assets/Offerings/image1.png";
import icon from "../../assets/Offerings/sttisticbox.png";

const Offerings = () => {
  return (
    <div className="pl-24 bg-gradient-to-b from-[#D1E5F1] to-[#FFFFFF00] text-[#173669]">
      {/* Desktop Version */}
      <div className="hidden md:block">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center pl-24 pt-20 text-center md:text-left md:items-start">
          <h2 className="text-[60px] uppercase font-[Poppins] font-[275] max-md:mt-10 max-md:text-4xl md:mr-8">
            Our Offerings
          </h2>
          <div className="flex font-[Mulish] mt-2 font-[400] text-[19px] leading-[26px] ml-14 flex-col">
            <span>
              As a leading OEM, EKKAA offers a wide array of consumer electronics
              and appliances, from <br /> high-performance LED TVs and smart
              displays to a variety of cutting-edge solutions, all <br /> designed
              to deliver superior performance and an enhanced user experience.
            </span>
            <span className="mt-2">
              With cutting-edge R&D and 24/7 support, we provide comprehensive
              turnkey solutions, taking <br /> full control from inception to
              packaging and delivering.
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col mt-16 pl-24 pt-10 md:flex-row">
          <div className="flex flex-col max-md:mb-6">
            <div className="flex justify-center bg-[#0F2E61] h-[179px] w-[179px] max-md:px-5">
              <img
                loading="lazy"
                src={icon}
                alt="Statistic Icon"
                className="object-contain w-[111px]"
              />
            </div>
            <div className="flex flex-col px-5 py-7 text-white bg-[#E6AF2E] h-[179px] w-[179px]">
              <div className="text-5xl leading-none max-md:text-4xl">700+</div>
              <div className="text-lg font-medium leading-5 text-center">
                Expert Team <br /> Members
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <img
              src={im}
              alt="Offering illustration"
              className="object-contain -ml-[10px] h-[360px] w-[547px]"
            />
          </div>
          <div className="flex flex-col -mt-19 md:flex-row md:space-x-8">
            <img
              src={im1}
              alt="Offering illustration"
              className="object-contain h-[550px] w-[680px] max-md:h-[300px] md:mt-0"
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex flex-col justify-center mr-20 md:hidden  text-center p-6">
        <h2 className="text-4xl uppercase font-[Poppins] font-[275] mt-6">
          Our Offerings
        </h2>
        <p className="text-[16px] font-[Mulish] mt-2 leading-[22px]">
          As a leading OEM, EKKAA offers a wide array of consumer electronics
          and appliances, from high-performance LED TVs and smart displays to a
          variety of cutting-edge solutions.
        </p>
        <p className="mt-2 text-[16px]">
          With cutting-edge R&D and 24/7 support, we provide comprehensive
          turnkey solutions, taking full control from inception to packaging and
          delivering.
        </p>

        {/* Stats Box */}
        <div className="flex flex-row items-center mt-6">
          <div className="bg-[#0F2E61] h-[120px] w-[120px] flex justify-center items-center">
            <img src={icon} alt="Statistic Icon" className="object-contain w-[80px]" />
          </div>
          <div className="bg-[#E6AF2E] h-[120px] w-[120px] flex justify-center items-center">
            700+ Expert Team Members
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-6">
          <img src={im} alt="Offering illustration" className="w-full h-auto" />
          <img src={im1} alt="Offering illustration" className="w-full h-auto mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Offerings;
