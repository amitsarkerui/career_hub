import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#F9F9FF" }}>
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row pt-7">
        <div>
          <h1 className="text-6xl font-bold leading-snug mb-5">
            One Step
            <br /> Closer To Your
            <br />
            <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="w-3/4 mb-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div>
            <button className="bg-purple-500 py-3 px-6 rounded-md text-lg font-medium text-white hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src="../../public/images/heroimage.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
