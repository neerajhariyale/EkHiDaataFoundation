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
import video12 from "../assets/workPhotoVideos/video12.mp4";
import video13 from "../assets/workPhotoVideos/video13.mp4";
import video14 from "../assets/workPhotoVideos/video14.mp4";
import video15 from "../assets/workPhotoVideos/video15.mp4";
import video16 from "../assets/workPhotoVideos/video16.mp4";
import video17 from "../assets/workPhotoVideos/video17.mp4";

import image1 from "../assets/workPhotoVideos/image1.jpg";
import image2 from "../assets/workPhotoVideos/image2.jpg";
import image3 from "../assets/workPhotoVideos/image3.jpg";
import image4 from "../assets/workPhotoVideos/image4.jpg";
import image5 from "../assets/workPhotoVideos/image5.jpg";
import image6 from "../assets/workPhotoVideos/image6.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Drives = () => {
  const navigate = useNavigate();

  const galleryData = [
    {
      type: "video",
      url: video12,
    },
    {
      type: "video",
      url: video13,
    },
    {
      type: "video",
      url: video14,
    },
    {
      type: "video",
      url: video15,
    },
    {
      type: "video",
      url: video16,
    },
    {
      type: "video",
      url: video17,
    },
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
    {
      type: "video",
      url: video2,
    },
    {
      type: "video",
      url: video11,
    },
    {
      type: "video",
      url: video9,
    },
    {
      type: "video",
      url: video5,
    },
    {
      type: "video",
      url: video4,
    },
    {
      type: "image",
      url: image3,
    },
    {
      type: "video",
      url: video7,
    },
  ];

  return (
    <div>
      <div className=" w-11/12 mt-5 mx-auto flex flex-col items-center justify-evenly">
        {/* Heading  */}
        <div className="flex flex-col items-center">
          <p className="text-center mt-1  text-3xl">📸 Drive Gallery</p>
          <div className="w-18 border-2 border-red-500 mt-1"></div>
        </div>
      </div>

      <p className="text-center text-gray-600 mb-5 max-w-2xl mx-auto mt-4">
        Here’s a glimpse of our on-ground impact — serving food, sharing warmth,
        and supporting lives with kindness. Watch the mission in action.
      </p>

      {/* Image and Video Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-2 w-10/12 mx-auto mt-5 mb-5 ">
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
            {/* <div className="px-4 py-2">
            <h2 className="text-md font-semibold">{item.title}</h2>
          </div> */}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-5">
        <p className="text-lg font-semibold">
          {" "}
          Want to contribute to moments like these? <br />{" "}
          <span className="text-md text-gray-500 font-normal">
            Join our next drive or support us with a donation.
          </span>
        </p>

        <div className="flex justify-center items-center gap-3 mt-2 mb-5">
          {/* Join Us Button */}
          <button
            className="bg-gray-500 rounded-full h-10 w-32 text-white hover:bg-gray-800 cursor-pointer"
            onClick={() => navigate("/joinus")}
          >
            Join a drive
          </button>

          {/* Donate Button */}
          <button
            className="bg-red-500 rounded-full h-10 w-32 text-white hover:bg-gray-800 cursor-pointer"
            onClick={() => navigate("/donate")}
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>

    // </div>
  );
};

export default Drives;
