import React from "react";
import SubCategories from "./SubCategories";

const subCatImages = [
  {
    key:1,
    img: "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2Fmobile%2FSnacks_Beverages_1_.png&w=1920&q=75",
  },
  {
    key:2,
    img: "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2Fmobile%2FDairy_Frozen_s_1_.png&w=1920&q=75",
  },
  {
    key:3,
    img: "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2Fmobile%2FSnacks_Beverages_1_.png&w=1920&q=75",
  },
  {
    key:4,
    img: "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2Fmobile%2FHair_Face_Skincare_1_.png&w=1920&q=75",
  },
  {
    key:5,
    img: "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2Fmobile%2FDairy_Frozen_s_1_.png&w=1920&q=75",
  },
];

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
