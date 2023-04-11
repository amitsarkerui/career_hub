import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utilites/fakeDB";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const [applied, setApplied] = useState([]);
  console.log("----->7 line", applied);
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

  return (
    <div>
      <h1>Ap</h1>
    </div>
  );
};

export default AppliedJobs;
