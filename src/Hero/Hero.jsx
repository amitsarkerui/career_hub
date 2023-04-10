import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#F9F9FF" }}>
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div>
          <h1>One Step Closer To Your Dream Job</h1>
          <p>
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
