import React, { useContext, useEffect, useState } from "react";
import { Cards } from "./Cards";
import { cardDataJSON } from "../utils/constant";
import { CardWithOffer } from "./Cards";
import UserContext from "../utils/UserContext";

const HOC = () => {
  const { names } = useContext(UserContext);

  const [cardData, setCardData] = useState([]);

  const [username, setUsername] = useState("vinu");

  const HigherOrderCard = CardWithOffer(Cards);

  useEffect(() => {
    setCardData(cardDataJSON);
  }, []);

  return (
    <div className="flex">
      <h2>{names}</h2>
      <UserContext.Provider value={{ names: username, setUsername }}>
        <div>
          {cardData.map((data) =>
            data.offer ? (
              <HigherOrderCard key={data.id} info={data} />
            ) : (
              <Cards key={data.id} info={data} />
            )
          )}
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default HOC;
