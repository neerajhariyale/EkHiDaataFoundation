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
      social:
        "https://www.instagram.com/adwith_._09?utm_source=qr&igsh=bTVubjM0Y3NwbGY4",
      desc: "Founded by visionary minds, Ek Hi Daata Foundation began with a mission to serve humanity, spread kindness, and uplift the underprivileged across communities.",
    },
    {
      name: "Dhyanendra Singh Patel",
      position: "Co-Founder",
      src: dsp,
      social: "https://www.instagram.com/_dsp_11?igsh=YTNtcXFxemhuMTM4",
      desc: "Co-Founder of Ek Hi Daata Foundation, dedicated to creating impactful change through compassion, education, and community empowerment for a better tomorrow.",
    },
  ];

  const memberData = [
    {
      name: "Rohit Atude",
      position: "Secretary",
      src: rohit,
      social: "https://www.instagram.com/rohitxlx?igsh=MWRwMDN1aXZ0aDJpeA==",
      desc: "Dedicated and passionate, our Secretary ensures smooth operations, coordinates initiatives, and strengthens community outreach to help us serve humanity more effectively every day.",
    },
    {
      name: "Aniket thakur",
      position: "Joint Secretary",
      src: aniket,
      social: "https://www.instagram.com/akki_b8?igsh=YnNxMmNhbzdseDdn",
      desc: "Leading with purpose, the Joint Secretary supports outreach, coordinates volunteers, and strengthens community impact through dedicated social responsibility efforts.",
    },
    {
      name: "Poonam Uike",
      position: "Organization Secretary",
      src: poonam,
      social: "https://www.instagram.com/_punamm_11?igsh=dGt0ODNzZGU4azU4",
      desc: "Dedicated leader ensuring transparency, coordination, and smooth operations to uplift lives through collective efforts.",
    },
    {
      name: "Mohit kanchole",
      position: "Treasurer",
      src: mohit,
      social:
        "https://www.instagram.com/mohit_kanchole07?igsh=c3lvY21zYzNid3M1",
      desc: "Manages all donations, keeps records, ensures funds are used properly to support our foundation’s mission.",
    },
    {
      name: "Juhi chandel",
      position: "Member",
      src: pari,
      social: "https://www.instagram.com/__juhi_x1?igsh=bWg4Y2Z2MnphOHQ4",
      desc: "An Ek Hi Daata Foundation  is caring, kind, and dedicated to helping others with honesty, compassion, and teamwork.",
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
                <a href={item.social} target="_blank" rel="noopener noreferrer">
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
                <a href={item.social} target="_blank" rel="noopener noreferrer">
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
