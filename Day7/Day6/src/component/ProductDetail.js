import React from 'react';
import { catObj } from "../utils/constants";
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {

  const {productId} = useParams();

  console.log(productId)


  const product = catObj.find(item => item.id == productId);

  
  const { name,image,price } = product;


  return (
    <div className="productf-container">
      <div className="productf-image">
        <img src={image} alt="Product" />
      </div>
      <div className="productf-info">
        <h2 className="productf-name">{name}</h2>
        <p className="productf-price">{price}</p>
        <p className="productf-details">
          This is a detailed description of the product. It highlights the key features and benefits of the product, providing all the information a potential buyer might need to make an informed decision.
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
