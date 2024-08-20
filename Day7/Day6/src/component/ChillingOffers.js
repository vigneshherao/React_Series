import React from "react";
import {Product} from "./Product";
import { productOffer } from "./Product";

const catObj = [
  {
    name: "Ghee & Vanaspati",
    url_key: "ghee-vanaspati",
    uid: "MzE=",
    id: 31,
    level: 3,
    image:
      "https://mcprod.sparindia.com/media/catalog/category/Ghee___Vanaspati.png",
    include_in_menu: 1,
    product_count: 27,
    offer:true
  },
  {
    name: "Organic Food",
    url_key: "organic-food",
    uid: "NTY1",
    id: 565,
    level: 3,
    image:
      "https://mcprod.sparindia.com/media/catalog/category/Organic_Food.png",
    include_in_menu: 1,
    product_count: 164,
  },
  {
    name: "Flours",
    url_key: "flours",
    uid: "NTcx",
    id: 571,
    level: 3,
    image: "https://mcprod.sparindia.com/media/catalog/category/Flours.png",
    include_in_menu: 1,
    product_count: 143,
  },
  {
    name: "Rice & Rice Products",
    url_key: "rice-rice-products",
    uid: "NTc3",
    id: 577,
    level: 3,
    image:
      "https://mcprod.sparindia.com/media/catalog/category/Rice___Rice_Products.png",
    include_in_menu: 1,
    product_count: 146,
    offer:true
  },
  {
    name: "Pulses",
    url_key: "pulses",
    uid: "NTk4",
    id: 598,
    level: 3,
    image: "https://mcprod.sparindia.com/media/catalog/category/Pulses.png",
    include_in_menu: 1,
    product_count: 59,
  },
  {
    name: "DAL",
    url_key: "dal",
    uid: "NjA0",
    id: 604,
    level: 3,
    image: "https://mcprod.sparindia.com/media/catalog/category/Dal.png",
    include_in_menu: 1,
    product_count: 33,
    offer:true
  },
  {
    name: "Masala & Spices",
    url_key: "masala-spices",
    uid: "NjM0",
    id: 634,
    level: 3,
    image:
      "https://mcprod.sparindia.com/media/catalog/category/Masala___Spices.png",
    include_in_menu: 1,
    product_count: 533,
    offer:true
  },
  {
    name: "Salt / Sugar / Jaggery",
    url_key: "salt-sugar-jaggery",
    uid: "NjUy",
    id: 652,
    level: 3,
    image:
      "https://mcprod.sparindia.com/media/catalog/category/Salt_Sugar_Jaggery.png",
    include_in_menu: 1,
    product_count: 74,
  },
  {
    name: "Cooking Oil",
    url_key: "cooking-oil",
    uid: "NjY3",
    id: 667,
    level: 3,
    image:
      "https://mcprod.sparindia.com/media/catalog/category/Cooking_Oil.png",
    include_in_menu: 1,
    product_count: 147,
  },
  {
    name: "Dry Fruits",
    url_key: "dry-fruits",
    uid: "Njc2",
    id: 676,
    level: 3,
    image: "https://mcprod.sparindia.com/media/catalog/category/Dry_Fruits.png",
    include_in_menu: 1,
    product_count: 203,
    offer:true
  },
];

const ChillingOffers = () => {

  const ProductWithOffer = productOffer(Product);
  return (
    <div className="product-container">
      {catObj.map((porduct) => {
        return porduct.offer ? <ProductWithOffer   key={porduct.id} productDetail={porduct} /> : <Product key={porduct.id} productDetail={porduct} />;
      })}
    </div>
  );
};

export default ChillingOffers;
