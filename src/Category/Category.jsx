import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategorySingle from "./CategorySingle/CategorySingle";

const Category = () => {
  const [category, setCategory] = useState([]);
  //   console.log(category);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="container mx-auto px-4 my-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-5">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {category.map((singleCategory) => (
          <CategorySingle
            key={singleCategory.id}
            singleCategory={singleCategory}
          ></CategorySingle>
        ))}
      </div>
    </div>
  );
};

export default Category;
