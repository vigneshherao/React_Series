import React from "react";

export const Cards = ({ info }) => {
  const { name } = info;
  return (
    <div className="w-10 h-10 bg-purple-200">
      <h2 className="text-red-500">{name}</h2>
    </div>
  );
};

export const CardWithOffer = (Cards) => {
  return (props) => {
    return (
      <div>
        <p>with offer</p>
        <Cards {...props} />
      </div>
    );
  };
};
