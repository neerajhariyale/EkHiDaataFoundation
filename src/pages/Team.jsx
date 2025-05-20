import React from "react";
import Teams from "../components/Teams";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div>
      <div className="mt-5  ">
        <p className="text-2xl italic font-semibold ">
          "We are the hands behind{" "}
          <span className="text-red-500"> Ek hi Daata Foundation" </span>
        </p>
      </div>

      {/* Team Component */}
      <Teams />

      {/* Footer  */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
