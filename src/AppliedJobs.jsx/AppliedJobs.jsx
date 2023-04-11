import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utilites/fakeDB";
import { useLoaderData } from "react-router-dom";
import SingleAppliedJobs from "./SingleAppliedJobs/SingleAppliedJobs";

const AppliedJobs = () => {
  const [applied, setApplied] = useState([]);
  // console.log("----->7 line", applied);
  const appliedJobsId = getShoppingCart();
  const allJobs = useLoaderData();
  useEffect(() => {
    let appliedJobs = [];
    for (const id in appliedJobsId) {
      const storedJobs = allJobs.find((jb) => jb.id === id);
      if (storedJobs) {
        appliedJobs.push(storedJobs);
        setApplied(appliedJobs);
      }
    }
  }, [allJobs]);
  const handlerOnsite = () => {
    const onsiteJobs = applied.filter(
      (singleJob) => singleJob.jobtype === "Onsite"
    );
    setApplied(onsiteJobs);
  };
  const handlerRemote = () => {
    const RemoteJobs = applied.filter(
      (singleJob) => singleJob.jobtype === "Remote"
    );
    // console.log("----->23 onsite", onsiteJobs);
    setApplied(RemoteJobs);
  };
  return (
    <div>
      <h1
        style={{ backgroundColor: "#F9F9FF" }}
        className="bg-purple-500 text-center py-24 text-3xl font-bold"
      >
        Applied Jobs
      </h1>
      <div className="container mx-auto my-20">
        <div className="text-right">
          <button
            onClick={handlerOnsite}
            className="btn border border-purple-500 px-6 py-3 rounded-md hover:bg-purple-500 hover:text-white"
          >
            Onsite
          </button>
          <button
            onClick={handlerRemote}
            className="ms-5 btn border border-purple-500 px-6 py-3 rounded-md hover:bg-purple-500 hover:text-white"
          >
            Remote
          </button>
        </div>
        <div>
          {applied.map((singleJob) => (
            <SingleAppliedJobs
              key={singleJob.id}
              singleJob={singleJob}
            ></SingleAppliedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
