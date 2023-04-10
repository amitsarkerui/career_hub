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
          <div className="col-span-2">
            <div className="bg-purple-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold">Job Details:</h3>
              <hr className="border border-purple-200 my-5" />
              <div className="flex gap-2 items-center">
                <img src="../../../public/icons/doller.png" alt="" />
                <p>
                  <span className="font-bold">Salary :</span>{" "}
                  {singleJobs.salary} (Per Month)
                </p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <img src="../../../public/icons/calender.png" alt="" />
                <p>
                  <span className="font-bold">Job Title :</span>{" "}
                  {singleJobs.jobTitle}
                </p>
              </div>
              <h3 className="text-xl font-bold mt-10">Contact Information :</h3>
              <hr className="border border-purple-200 my-5" />
              <div className="flex gap-2 items-center">
                <img src="../../../public/icons/call.png" alt="" />
                <p>
                  <span className="font-bold">Phone :</span> {singleJobs.phone}
                </p>
              </div>
              <div className="flex gap-2 items-center my-4">
                <img src="../../../public/icons/mail.png" alt="" />
                <p>
                  <span className="font-bold">Email :</span> {singleJobs.email}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="../../../public/icons/location.png" alt="" />
                <p>
                  <span className="font-bold">Address :</span>{" "}
                  {singleJobs.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
