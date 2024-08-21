import React, { useContext, useState } from "react";
import { accordionData } from "../utils/constant";
import Accordian from "./Accordian";
import UserContext from "../utils/UserContext";

const Accord = () => {
  const [accordData, setAccordData] = useState(accordionData);
  const [isShowAns, setIsShowAns] = useState(1);
  const { names } = useContext(UserContext);
  return (
    <div className="accord-container">
      {accordData?.title && <h2>{names}</h2>}
      {accordData?.accordionItems?.map((accordionItem) => (
        <Accordian
          key={accordionItem.id}
          data={accordionItem}
          isShowAns={accordionItem.id === isShowAns}
          setIsShowAns={() => setIsShowAns(accordionItem.id)}
        />
      ))}
    </div>
  );
};

export default Accord;
