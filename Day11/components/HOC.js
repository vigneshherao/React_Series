import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { cardDataJSON } from "../utils/constant";
import { CardWithOffer } from "./Cards";

const HOC = () => {
  const [cardData, setCardData] = useState([]);

  const HigherOrderCard = CardWithOffer(Cards);

  useEffect(() => {
    setCardData(cardDataJSON);
  }, []);

  return (
    <div className="flex">
      <div>
        {cardData.map((data) => (
         data.offer? <HigherOrderCard key={data.id} info={data} /> :  <Cards key={data.id} info={data} />
        ))}
      </div>
    </div>
  );
};

export default HOC;
