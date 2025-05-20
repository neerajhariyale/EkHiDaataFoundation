import React from "react";
import img1 from "../assets/workPhotoVideos/image1.jpg";
import img2 from "../assets/workPhotoVideos/image2.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="   w-full   mx-auto  ">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800 ">
        "EK HI DAATA –{" "}
        <span className="font-semibold italic text-red-500">
          The Only One Giver"
        </span>
      </h1>

      <div className="flex text-lg items-center gap-12 mt-10 mb-10 w-10/12 mx-auto justify-between ">
        <p>
          <span className="font-semibold">Ek Hi Daata Foundation</span> is a{" "}
          <span className="font-semibold italic">
            non-profit, charitable organization
          </span>
          <span>
            , founded with the sole purpose of helping those in need—humans and
            animals alike. Guided by compassion, humility, and a strong sense of
            service, we work relentlessly to bring hope, dignity, and care to
            the underprivileged sections of society.
          </span>
          <br /> <br />
          We believe that true service lies in giving without expecting anything
          in return. Inspired by this principle, we continue our mission to feed
          the hungry, clothe the poor, and care for stray animals, knowing that
          every small act of kindness can create ripples of change.
        </p>
      </div>

      {/* First Block */}
      <div className="w-10/12 justify-center mx-auto flex flex-col md:flex-row items-center gap-12 mt-10 mb-10 border-2 border-gray-300 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light">
        <img
          src={img1}
          alt="Serving image"
          className="w-full md:w-1/2 h-80 rounded-2xl shadow"
        />
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="italic font-semibold">Ek Hi Daata</span>, we
          believe that we are merely channels of this divine generosity. Whether
          it’s food, education, medical help, or emotional support, we are here
          to serve with humility— knowing that the real Daata—the true giver—is
          the One above.
        </p>
      </div>

      {/* Second Block */}
      <div className="w-10/12 justify-center mx-auto flex flex-col-reverse md:flex-row items-center gap-8 h-4/12 border-2 border-gray-300 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="italic font-semibold">Ek Hi Daata Foundation</span>{" "}
          is a non-profit organization devoted to supporting the less
          fortunate—both humans and animals. Driven by empathy, respect, and a
          genuine spirit of service, we work tirelessly to uplift the
          underprivileged by providing care, comfort, and hope where it's needed
          most.
        </p>
        <img
          src={img2}
          alt="Work image"
          className="w-full md:w-1/2 h-80 rounded-lg shadow"
        />
      </div>

      {/* Our Core Activities */}
      <div className="mt-16 w-11/12 flex justify-center items-center mx-auto flex-col">
        <div className="flex flex-col items-center">
          <p className="text-center mt-8  text-3xl">Our Core Activities</p>
          <div className="w-16 border-2 border-red-500 mt-1"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {/* Food Distribution */}
          <div className="bg-white border border-gray-200 cursor-pointer shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-red-500 mb-2">
              🥘 Food Distribution Drives
            </h3>
            <p className="text-gray-700">
              We conduct regular drives to provide hot meals and food packets to
              those who can’t afford a daily meal—homeless individuals, migrant
              laborers, slum dwellers, and more.
            </p>
          </div>

          {/* Clothing Donation */}
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl cursor-pointer transition duration-300">
            <h3 className="text-xl font-semibold text-red-500 mb-2">
              👕 Clothing and Essentials Donation
            </h3>
            <p className="text-gray-700">
              Through seasonal donation campaigns, we collect and distribute
              clothes, shoes, blankets, and hygiene kits to those living in
              poverty or on the streets.
            </p>
          </div>

          {/* Animal Welfare */}
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl cursor-pointer transition duration-300">
            <h3 className="text-xl font-semibold text-red-500 mb-2">
              🐾 Animal Welfare Drives
            </h3>
            <p className="text-gray-700">
              We care deeply for stray animals. We organize feeding drives for
              dogs, cows, and other animals in urban and rural areas, especially
              during harsh weather conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-18 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default About;
