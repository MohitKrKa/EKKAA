import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import box from "../../assets/About/box.svg";
import products from "../Products/productData.js";

function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(products[0].images[0]);
  const [activeImage, setActiveImage] = useState(products[0].images[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setMainImage(products[currentIndex].images[0]);
    setActiveImage(products[currentIndex].images[0]);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = (newImage) => {
    setMainImage(newImage);
    setActiveImage(newImage);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="bg-white mt-10 ml-8  font-[Poppins]">
      <header className="flex justify-center items-center text-5xl py-8 px-4">
        <h1 className="font-[Poppins] font-[275] uppercase tracking-wider">
          OUR PRODUCTS
        </h1>
      </header>

      <main className="mx-auto  px-4 md:px-8 py-8 relative">
        {/* Navigation Buttons */}

        {isMobile ? (
          // Mobile Layout
          <>
            <div className="absolute  flex gap-4 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className=" p-3 rounded-full shadow-md hover:bg-gray-300 transition"
              >
                <FaChevronLeft size={10} />
              </button>
              <button
                onClick={handleNext}
                className=" p-3 rounded-full shadow-md hover:bg-gray-300 transition"
              >
                <FaChevronRight size={10} />
              </button>
            </div>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col  items-center text-center"
            >
              <motion.img
                key={mainImage}
                src={mainImage}
                alt="product"
                className="max-h-[200px] rounded-md mb-4"
              />
              <div className="flex flex-row gap-4 mt-4">
                {products[currentIndex].images.map((image) => (
                  <motion.div
                  key={image}
                  className={`relative   w-16 h-16 rounded-md overflow-hidden cursor-pointer flex items-center justify-center ${
                    activeImage === image ? "border border-[#E6AF2E]" : ""
                  }`}
                  onClick={() => handleHover(image)}
                >
                  <motion.img
                    src={image}
                    alt="product"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </motion.div>
                
                ))}
              </div>
              <h2 className="text-2xl mt-10 font-[Poppins] font-[300] text-[#173669] mb-4">
                {products[currentIndex].name}
              </h2>
              <p className="text-[#525B68] text-base font-[Poppins] font-[300] leading-6 mb-6">
                {products[currentIndex].description}
              </p>
              <button className="flex relative font-[Poppins] mt-4 items-center text-sm cursor-pointer">
                <img src={box} alt="" className="absolute" />
                <span className="ml-8 mr-8 text-[#525B68]">Explore us</span>
              </button>
            </motion.div>
          </>
        ) : (
          // Desktop Layout
          <>
            <div className="absolute right-0 mr-22 flex gap-4 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className=" p-3 cursor-pointer  rounded-full shadow-md hover:bg-gray-300 transition"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className=" p-3 cursor-pointer  rounded-full shadow-md hover:bg-gray-300 transition"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid  grid-cols-2 gap-8"
            >
              <div className="relative  pb-12 -mt-10 flex justify-center">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt="product"
                  className="max-h-[500px]  rounded-md"
                />
                <div className="flex flex-row gap-4 bottom-0 items-center absolute">
                  {products[currentIndex].images.map((image) => (
                    <motion.div
                      key={image}
                      className="relative w-20 h-20 rounded-md overflow-hidden cursor-pointer flex items-center justify-center"
                      onHoverStart={() => handleHover(image)}
                    >
                      <motion.img
                        src={image}
                        alt="product"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      {activeImage === image && (
                        <motion.div
                          layout
                          className="absolute bottom-0 w-full h-1 bg-[#E6AF2E]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ type: "spring", stiffness: 100 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Product Details */}

              <div className="py-4 ml-20">
                <h2 className="text-3xl font-[Poppins] font-[300] text-[#173669] mb-4">
                  {products[currentIndex].name}
                </h2>
                <p className="text-[#525B68] text-base font-[Poppins] font-[300] leading-6 mb-6">
                  {products[currentIndex].description
                    .split(" ")
                    .map((word, index) =>
                      (index + 1) % 10 === 0 ? (
                        <>
                          {word}
                          <br />
                        </>
                      ) : (
                        word + " "
                      )
                    )}
                </p>
                <button className="flex relative font-[Poppins] mt-4 items-center text-sm cursor-pointer">
                  <img src={box} alt="" className="absolute" />
                  <span className="ml-8 mr-8 text-[#525B68]">Explore us</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </main>
    </div>
  );
}

export default Product;
