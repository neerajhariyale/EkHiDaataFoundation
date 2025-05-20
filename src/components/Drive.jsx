import React from "react";
import ReactPlayer from "react-player";
import video1 from "../assets/workPhotoVideos/video1.mp4";
import video2 from "../assets/workPhotoVideos/video2.mp4";
import video3 from "../assets/workPhotoVideos/video3.mp4";
import video4 from "../assets/workPhotoVideos/video4.mp4";
import video5 from "../assets/workPhotoVideos/video5.mp4";
import video6 from "../assets/workPhotoVideos/video6.mp4";
import video7 from "../assets/workPhotoVideos/video7.mp4";
import video8 from "../assets/workPhotoVideos/video8.mp4";
import video9 from "../assets/workPhotoVideos/video9.mp4";
import video10 from "../assets/workPhotoVideos/video10.mp4";
import video11 from "../assets/workPhotoVideos/video11.mp4";
import image1 from "../assets/workPhotoVideos/image1.jpg";
import image2 from "../assets/workPhotoVideos/image2.jpg";
import image3 from "../assets/workPhotoVideos/image3.jpg";
import image4 from "../assets/workPhotoVideos/image4.jpg";
import image5 from "../assets/workPhotoVideos/image5.jpg";
import image6 from "../assets/workPhotoVideos/image6.jpg";
import { useNavigate } from "react-router-dom";

const Drive = () => {
  const navigate = useNavigate();

  // Drive Gallery Data
  const galleryData = [
    {
      type: "image",
      url: image1,
    },
    {
      type: "video",
      url: video1,
    },
    {
      type: "image",
      url: image5,
    },
  ];

  return (
    <div>
      <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <p className="text-center mt-8  text-3xl">Drives</p>
          <div className="w-16 border-2 border-red-500 mt-1"></div>
        </div>
      </div>

      {/* Image and Video Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-2 w-10/12 mx-auto mt-5 ">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg object-fit cursor-pointer bg-black transition duration-200"
          >
            {item.type === "image" ? (
              <img src={item.url} alt={item.title} className="w-full h-auto " />
            ) : (
              <video controls className="w-full h-auto">
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-gray-500 rounded-xl h-10 w-32 text-white hover:bg-red-500 cursor-pointer"
          onClick={() => navigate("/drive")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Drive;
