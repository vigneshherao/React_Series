import React from "react";


const SubCategories = ({ subImages }) => {
  const { img } = subImages;
  return (
    <div className="sub-cat">
      <img src={img} alt="" />
    </div>
  );
};

export default SubCategories;
