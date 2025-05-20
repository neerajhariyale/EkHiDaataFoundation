import React from "react";
import neeraj from "../assets/teamPhoto/neeraj.png";
import { FaInstagram } from "react-icons/fa6";
import birbal from "../assets/teamPhoto/Birbal.jpg";
import dsp from "../assets/teamPhoto/DSP.jpg";
import aniket from "../assets/teamPhoto/Aniket.jpg";
import mohit from "../assets/teamPhoto/Mohit.jpg";
import poonam from "../assets/teamPhoto/Poonam.jpg";
import rohit from "../assets/teamPhoto/Rohit.jpg";
import pari from "../assets/teamPhoto/Pari.jpg";

const Teams = () => {
  const founderData = [
    { 
      name: "Birbal Suthar",
      position: "Founder",
      src: birbal,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
    {
      name: "Dhyanendra Singh Patel",
      position: "Co-Founder",
      src: dsp,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
  ];

  const memberData = [
    {
      name: "Rohit Atude",
      position: "Secretary",
      src: rohit,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
    {
      name: "Aniket thakur",
      position: "Joint Secretary",
      src: aniket,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
    {
      name: "Poonam Uike",
      position: "Organization Secretary",
      src: poonam,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
    {
      name: "Mohit kanchole",
      position: "Treasurer",
      src: mohit,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
    {
      name: "Juhi chandel",
      position: "Member",
      src: pari,
      social: "https://www.instagram.com",
      desc: "At our core, we believe that all blessings, support, and kindness flow from the Almighty, and we are simply the humble channels of His divine generosity",
    },
  ];

  return (
    <div className="px-4">
      {/* Founder Cards */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center mt-5 w-full max-w-screen-md mx-auto">
          {founderData.map((item, index) => (
            <div
              key={index}
              className="w-80 max-w-sm h-96 border-2 border-gray-300 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light mx-auto"
            >
              <img
                src={item.src}
                alt=""
                className="h-24 w-24 object-cover mx-auto rounded-full"
              />
              <p className="text-center text-xl font-semibold mt-3">
                {item.name}
              </p>
              <p className="text-center text-md text-gray-700 font-semibold">
                {item.position}
              </p>
              <p className="text-center text-sm mt-2">{item.desc}</p>
              <div className="flex justify-center mt-3">
                <a
                  href={item.social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-red-500 hover:text-red-800 transition duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Cards */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mt-5 w-full max-w-screen-lg mx-auto">
          {memberData.map((item, index) => (
            <div
              key={index}
              className="w-80 max-w-sm h-96 border-2 border-gray-300 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light mx-auto"
            >
              <img
                src={item.src}
                alt=""
                className="h-24 w-24 object-cover mx-auto rounded-full"
              />
              <p className="text-center text-xl font-semibold mt-3">
                {item.name}
              </p>
              <p className="text-center text-md text-gray-700 font-semibold">
                {item.position}
              </p>
              <p className="text-center text-sm mt-2">{item.desc}</p>
              <div className="flex justify-center mt-3">
                <a
                  href={item.social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-red-500 hover:text-red-800 transition duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
