import React from "react";
import { Link } from "react-router-dom";

const SingleJobs = ({ singleJobs }) => {
  const {
    id,
    logo,
    jobTitle,
    companyName,
    jobtype,
    jobtime,
    location,
    salary,
  } = singleJobs;
  return (
    <div className="border border-gray-200 rounded-lg p-8">
      <img src={logo} alt="" />
      <h2 className="text-xl font-bold mb-3 mt-6">{jobTitle}</h2>
      <p className="text-lg text-gray-400 mb-3">{companyName}</p>
      <div className="flex gap-3 mb-3">
        <p className="border border-purple-500 px-4 py-1 rounded-md">
          {jobtime}
        </p>
        <p className="border border-purple-500 px-4 py-1 rounded-md">
          {jobtype}
        </p>
      </div>
      <div className="flex gap-8 text-lg text-gray-400 mb-3">
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p>{location}</p>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{salary}</p>
        </div>
      </div>
      <div>
        <button className="mt-6 bg-purple-500 py-2 px-4 rounded-md text-lg text-white hover:bg-blue-500">
          <Link to={`/jobsDetails/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default SingleJobs;
