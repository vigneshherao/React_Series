import React, { useState } from "react";

export const Product = ({ productDetail }) => {
  const { name, image, price } = productDetail;

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


export const productOffer = (Product) => {
  return (productDetail) => {
    return (
      <>
        <label className="offer-label">Offer</label>
        <Product  {...productDetail}/>
      </>
    );
  };
};
