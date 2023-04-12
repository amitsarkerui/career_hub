import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb, getShoppingCart } from "../../utilites/fakeDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobsDetails = () => {
  let clickedId = useParams();
  let jobsDetails = useLoaderData();
  let storedJobs = getShoppingCart();
  const [singleJobs, setSingleJobs] = useState({});
  console.log("singleJobs 10line---->", singleJobs);
  const [matchLocalStorage, setMatchLocalStorage] = useState([]);
  console.log("From Details find matchLocalStorage---->", matchLocalStorage);
  // Find Clicked Job data
  useEffect(() => {
    const singleData = jobsDetails.find(
      (singleJob) => singleJob.id === clickedId.id
    );
    if (singleData) {
      setSingleJobs(singleData);
    }
  }, []);
  const addToLocalStorage = (id) => {
    toast.success("Applied Successfully");
    addToDb(id);
    setInterval(() => {
      window.location.reload();
    }, 5500);
  };
  // Filter from local storage
  useEffect(() => {
    const matchJob = [];
    for (const id in storedJobs) {
      const findJobs = jobsDetails.find((singleJob) => singleJob.id === id);
      matchJob.push(findJobs);
    }
    setMatchLocalStorage(matchJob);
    // console.log("From Details find findJobs---->", matchJob);
  }, []);
  // Find with clicked match data
  let appliedJobs;
  let appliedJobsBtn;
  appliedJobs = matchLocalStorage.find((sj) => sj?.id === singleJobs.id);
  if (appliedJobs) {
    appliedJobsBtn = (
      <button
        className=" bg-gray-300 w-full py-3 rounded-md mt-6 text-gray-500"
        disabled
      >
        Already Applied
      </button>
    );
  } else {
    appliedJobsBtn = (
      <button
        onClick={() => addToLocalStorage(singleJobs.id)}
        className=" bg-purple-500 w-full py-3 rounded-md mt-6 text-white hover:bg-blue-500"
      >
        Apply Now
      </button>
    );
  }
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
                <img src="/icons/doller.png" alt="" />
                <p>
                  <span className="font-bold">Salary :</span>{" "}
                  {singleJobs.salary} (Per Month)
                </p>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <img src="/icons/calender.png" alt="" />
                <p>
                  <span className="font-bold">Job Title :</span>{" "}
                  {singleJobs.jobTitle}
                </p>
              </div>
              <h3 className="text-xl font-bold mt-10">Contact Information :</h3>
              <hr className="border border-purple-200 my-5" />
              <div className="flex gap-2 items-center">
                <img src="/icons/call.png" alt="" />
                <p>
                  <span className="font-bold">Phone :</span> {singleJobs.phone}
                </p>
              </div>
              <div className="flex gap-2 items-center my-4">
                <img src="/icons/mail.png" alt="" />
                <p>
                  <span className="font-bold">Email :</span> {singleJobs.email}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/icons/location.png" alt="" />
                <p>
                  <span className="font-bold">Address :</span>{" "}
                  {singleJobs.address}
                </p>
              </div>
            </div>
            {appliedJobsBtn}
            {/* <button
              onClick={() => addToLocalStorage(singleJobs.id)}
              className=" bg-purple-500 w-full py-3 rounded-md mt-6 text-white hover:bg-blue-500"
            >
              Apply Now
            </button> */}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default JobsDetails;
