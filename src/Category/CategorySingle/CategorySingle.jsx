import React from "react";

const CategorySingle = ({ singleCategory }) => {
  return (
    <div className="bg-purple-50 rounded-lg p-8">
      <img
        className="bg-purple-100 p-3 rounded-md"
        src={singleCategory.categoryIcon}
        alt=""
      />
      <h2 className="text-xl font-bold mt-8 mb-3">
        {singleCategory.categoryName}
      </h2>
      <p>{singleCategory.availableJobs}</p>
    </div>
  );
};

export default CategorySingle;
