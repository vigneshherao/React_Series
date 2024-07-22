import React from "react";
import SubCategories from "./SubCategories";
import { subCatImages } from "../utils/constants";


const Categories = () => {
  return (
    <div className="categories">
      {
        subCatImages.map((image)=>{
            return <SubCategories subImages={image} key={image.key} />;
        })
      }
    </div>
  );
};

export default Categories;
