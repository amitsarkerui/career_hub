import React, { useEffect, useState } from "react";
import SingleJobs from "./SingleJobs/SingleJobs";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  //   console.log("Alljobs---->", allJobs);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => dataSlice(data));
  }, []);
  const handleSeeAll = () => {
    setJobs(allJobs);
  };
  const dataSlice = (data) => {
    setAllJobs(data);
    const sliceData = data.slice(0, 4);
    // console.log("slice----", sliceData);
    setJobs(sliceData);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-5">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.map((singleJobs) => (
          <SingleJobs key={singleJobs.id} singleJobs={singleJobs}></SingleJobs>
        ))}
      </div>
      <div className="w-full text-center">
        <button
          onClick={handleSeeAll}
          className=" bg-purple-500 py-3 px-6 rounded-md text-lg font-medium text-white hover:bg-blue-500 my-10"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
