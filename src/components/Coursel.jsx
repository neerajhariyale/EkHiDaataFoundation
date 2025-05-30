import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import banner1 from "../assets/workPhotoVideos/image3.jpg";
import banner2 from "../assets/workPhotoVideos/image4.jpg";
import banner3 from "../assets/workPhotoVideos/image5.jpg";
import banner4 from "../assets/workPhotoVideos/image6.jpg";
import banner5 from "../assets/workPhotoVideos/image7.jpg";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Coursel = () => {
  // Image data
  const images = [
    { src: banner },
    { src: banner5 },
    { src: banner2 },
    { src: banner3 },
    { src: banner4 },
    { src: banner1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //  Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[600px] mx-auto overflow-hidden bg-black">
      {/* Image */}
      <img
        src={images[currentIndex].src}
        alt={`banner-${currentIndex}`}
        className="w-full h-full  object-contain  rounded-xl transition-all duration-500"
      />

      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute top-1/2 left-5 text-gray-100 text-3xl cursor-pointer z-10 transform -translate-y-1/2 hover:scale-110 transition"
      />

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute top-1/2 right-5 text-gray-100 text-3xl cursor-pointer z-10 transform -translate-y-1/2 hover:scale-110 transition"
      />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Coursel;
