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
    <div>
      {category.map((singleCategory) => (
        <CategorySingle
          key={singleCategory.id}
          singleCategory={singleCategory}
        ></CategorySingle>
      ))}
    </div>
  );
};

export default Category;
