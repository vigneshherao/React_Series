import React, { useState } from "react";

const Product = ({ productDetail }) => {
  const { name, image, price } = productDetail;

  console.log(useState())

  return (
    <div className="product">
      <div className="product-item">
        <img src={image} alt={name} className="product-image" />
        <div className="product-detail">
          <h4 className="product-name">{name}</h4>
          <p className="product-info">Product details has been dispatched</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
