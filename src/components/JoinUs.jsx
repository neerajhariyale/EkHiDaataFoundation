import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const JoinUs = () => {
  //  social media links and phone number
  const phoneNumber = "+919876543210";
  const instagramLink = "https://www.instagram.com/ekhidaata_foundation/?hl=en";
  const youtubeLink = "https://www.youtube.com/@ekhidaata_foundation";
  const whatsappLink =
    "https://www.whatsapp.com/channel/0029VawahZ8BA1ev9ScquV12?fbclid=PAZXh0bgNhZW0CMTEAAaeByXiMqI8lj-yC8DSCN8-1HYPxeOQsfDXfHu-J2KzYIBPvj8al71BoZzaDLQ_aem_xGQcu8fj6cXOUh9ZhiTpIQ";
  const gmailLink = "ekhidaatafoundation@gmail.com";

  return (
    <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-8">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <p className="text-center mt-8  text-3xl">Follow Us for Updates</p>
        <div className="w-16 border-2 border-red-500 mt-1"></div>
      </div>

      <div className="flex justify-center gap-5 items-center mt-4">
        {/* Phone Icon */}
        <div className="flex justify-center mt-3">
          <a
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone className="text-[39px] text-blue-400 hover:text-blue-800 transition duration-200" />
          </a>
        </div>

        {/* Instagram Icon */}
        <div className="flex justify-center mt-3">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-5xl text-red-500 hover:text-red-800 transition duration-200" />
          </a>
        </div>

        {/* Youtube Icon */}
        <div className="flex justify-center mt-3">
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-5xl text-red-500 hover:text-red-800 transition duration-200" />
          </a>
        </div>

        {/* Whatsapp Icon */}
        <div className="flex justify-center mt-3">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-5xl text-green-500 hover:text-green-800 transition duration-200" />
          </a>
        </div>

        {/* Gmail Icon */}
        <div className="flex justify-center mt-3">
          <a
            href={"mailto:ekhidaatafoundation@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className="text-5xl text-red-500 hover:text-red-800 transition duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
