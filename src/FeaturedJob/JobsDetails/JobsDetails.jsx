import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobsDetails = () => {
  let clickedId = useParams();
  let jobsDetails = useLoaderData();
  //   console.log("From Details---->", clickedId);
  //   console.log("From Details loader data---->", jobsDetails);
  const [singleJobs, setSingleJobs] = useState({});
  //   console.log("From Details find data---->", singleJobs);
  useEffect(() => {
    const singleData = jobsDetails.find(
      (singleJob) => singleJob.id === clickedId.id
    );
    if (singleData) {
      setSingleJobs(singleData);
    }
  }, []);
  return (
    <div>
      <h1
        style={{ backgroundColor: "#F9F9FF" }}
        className="bg-purple-500 text-center py-24 text-3xl font-bold"
      >
        Job Details
      </h1>
      <div className="container mx-auto my-20 px-4">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-6 ">
          <div className="col-span-4">
            <p>
              <span className="font-bold">Job Description: </span>{" "}
              {singleJobs.jobDescription}
            </p>
            <p className="my-8">
              <span className="font-bold">Job Responsibility: </span>{" "}
              {singleJobs.jobResponsibility}
            </p>
            <p className="font-bold">Educational Requirements:</p>
            <p>{singleJobs.educational}</p>
            <p className="font-bold mt-8">Experiences::</p>
            <p>{singleJobs.experience}</p>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
