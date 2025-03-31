import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import check from "../../assets/WhyChooseUs/check.svg";
import im from "../../assets/WhyChooseUs/image.png";
import im1 from "../../assets/WhyChooseUs/image1.png";
import im2 from "../../assets/WhyChooseUs/image2.png";
import im3 from "../../assets/WhyChooseUs/image3.png";
import im4 from "../../assets/WhyChooseUs/image4.png";
import im5 from "../../assets/WhyChooseUs/image5.png";
import { useMediaQuery } from "react-responsive";

const imageVariants = {
  left: { x: -100, opacity: 0, transition: { duration: 1 } },
  right: { x: 100, opacity: 0, transition: { duration: 1 } },
  top: { y: -100, opacity: 0, transition: { duration: 1 } },
  bottom: { y: 100, opacity: 0, transition: { duration: 1 } },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
};

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Media query hooks
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  // Desktop specific styles and components
  const DesktopView = () => (
    <div className="flex p-24 font-[Poppins]">
      <div className="flex flex-col pl-24 justify-center w-1/2">
        <h2 className="uppercase text-[4rem] text-[#0F2E61] font-[275]">
          Why choose us?
        </h2>
        <div className="flex flex-col gap-4 mt-10">
          <ul>
            {[
              "360° Manufacturing and Turnkey Solutions",
              "Expert ODM Manufacturer",
              "Customisable Solutions",
              "Seamless After-sales Support",
              "Uncompromising Quality",
              "Optimised Production and Value",
              "Compliance with Global Standards",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center text-[#525B68] gap-4 mt-5"
              >
                <img src={check} alt="" className="w-9" />
                <span className="font-[Poppins] font-[400] text-xl leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Image Grid with Animations */}
      <div className="grid grid-cols-3 gap-2 justify-end items-center">
        <motion.img
          src={im}
          alt=""
          className="mt-12"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im1}
          alt=""
          className="-mt-36"
          initial="top"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im2}
          alt=""
          className="-ml-7 -mt-16"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im4}
          alt=""
          className="-mt-18 ml-20"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im3}
          alt=""
          className="-mt-52"
          initial="bottom"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        {/* */}
        <motion.img
          src={im5}
          alt=""
          className="w-full -ml-6 -mt-52"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
      </div>
    </div>
  );

  // Mobile specific styles and components
  const MobileView = () => (
    <div className="bg-white flex flex-col p-8 font-[Poppins]">
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="uppercase text-[2.5rem] text-center text-[#0F2E61] font-[275] leading-tight">
          Why choose us?
        </h2>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <ul>
          {[
            "360° Manufacturing and Turnkey Solutions",
            "Expert ODM Manufacturer",
            "Customisable Solutions",
            "Seamless After-sales Support",
            "Uncompromising Quality",
            "Optimised Production and Value",
            "Compliance with Global Standards",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-center text-[#525B68] gap-2 mt-3"
            >
              <img src={check} alt="" className="w-6" />
              <span className="font-[Poppins] font-[400] text-lg leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Image Layout */}
      <div className="flex flex-wrap justify-center mt-8 gap-2">
        <motion.img
          src={im}
          alt=""
          className="w-1/3"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im1}
          alt=""
          className="w-1/3"
          initial="top"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im2}
          alt=""
          className="w-1/3"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im3}
          alt=""
          className="w-1/3"
          initial="bottom"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im4}
          alt=""
          className="w-1/3"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im5}
          alt=""
          className="w-1/3"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      {isDesktop && <DesktopView />}
      {isMobile && <MobileView />}
    </div>
  );
};

export default WhyChooseUs;