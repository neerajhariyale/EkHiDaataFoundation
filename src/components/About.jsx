import React from "react";
import quotes from "../assets/quotes.png";

const About = () => {
  return (
    <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center">
        <p className="text-center mt-8  text-3xl">About</p>
        <div className="w-16 border-2 border-red-500 mt-1"></div>
      </div>

      <div className=" w-10/12 text-center mt-5 text-lg border-2 border-gray-300 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light ">
        <span className="font-semibold"> "Ek Hi Daata" </span> translates to{" "}
        <span className="font-semibold"> "The Only One Giver" </span> — a
        powerful truth that guides everything we do. <br />
        <br /> Ek Hi Daata Foundation is a non-profit, charitable organization
        founded with the sole purpose of helping those in need—humans and
        animals alike. Guided by compassion, humility, and a strong sense of
        service, we work relentlessly to bring hope, dignity, and care to the
        underprivileged sections of society. <br /> <br /> Our work is grounded
        in the belief that true giving comes from above, and we are here only to
        carry it forward with compassion and humility. Whether it's helping a
        hungry soul, supporting a child's education, or offering a shoulder to
        someone in distress, we serve with one goal: to reflect the love and
        mercy of the One true Daata — the giver of all. <br /> <br />{" "}
        <span className="font-semibold italic">
          {" "}
          "We are not the givers. We are the vessels. The giving is His."{" "}
        </span>{" "}
        <br /> <br />
        Join us in this journey of service. Together, let's be the hands that
        give, the hearts that care, and the voices that remind the world of the
        One true Giver — Ek Hi Daata.
      </div>

      {/* <div>
        <img src={quotes} alt="" className="h-96 w-72" />
      </div> */}
    </div>
  );
};

export default About;
