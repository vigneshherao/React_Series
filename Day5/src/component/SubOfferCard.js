import React from "react";


const SubOfferCard = ({offerImage}) => {
  return (
    <div className="offer-card">
      <img src={offerImage} alt="offers" />
    </div>
  );
};

export default SubOfferCard;
