import React, { useState } from "react";
import Product from "./Product";
import { catObj } from "../utils/constants";
import { Link } from "react-router-dom";

const SuperDealOffer = () => {


  const [catObjs,setCatObjs] = useState(catObj);
  const [items,setItems] = useState(catObj);
  const [searchBtn, setSearchBtn] = useState("");


  return (
    <div>
      <div className="super-background">
        <div className="input-search">
          <div>
          <input className="searchInput" type="text" value={searchBtn} onChange={(e)=>{setSearchBtn(e.target.value)}}></input>
          </div>
        <div className="search-btn">
            <button onClick={()=>{
              const filtertedSearchItems = items.filter((item)=>{
                return item.name.toLowerCase().includes(searchBtn.toLowerCase());
              });
              setCatObjs(filtertedSearchItems);
            }}>Submit</button>
        </div>
        </div>
        <div className="super-cat">
          <div className="super-cat-img" onClick={()=>{
            const filterproduct =catObjs.filter((product)=>{
             return product.id < 500;
            })

            setCatObjs(filterproduct)
          }}> 
            <img
              src="https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2FBrandSpotlight%2FFruit_and_Vegetable_3x.png&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="super-cat-img" onClick={()=>{
            const filterproduct =catObjs.filter((product)=>{
             return product.id > 500 && product.id <600;
            })

            setCatObjs(filterproduct)
          }}>
            <img
              src="https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2FBrandSpotlight%2FFruit_and_Vegetable_3x.png&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="super-cat-img" onClick={()=>{
            const filterproduct =catObjs.filter((product)=>{
             return product.id > 600;
            })

            setCatObjs(filterproduct)
          }}>
            <img
              src="https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fwysiwyg%2Fjune-theme%2FBrandSpotlight%2FFruit_and_Vegetable_3x.png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="product-container">
          {catObjs.map((porduct) => {
            return <Link to={"/product/"+porduct.id} key={porduct.id}><Product productDetail={porduct} /></Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SuperDealOffer;
