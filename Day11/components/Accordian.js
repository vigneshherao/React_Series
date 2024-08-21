import React, { useState } from "react";

const Accordian = ({ data, isShowAns, setIsShowAns }) => {
  const [isTrue, setIsTrue] = useState(true);
  const { question, answer } = data;

  const handleClick = () => {
    setIsShowAns();
    setIsTrue(!isTrue);
  };

  return (
    <div className="accord-div">
      <div className="accord-title" onClick={handleClick}>
        <h2>{question}</h2>
        <div>🔽</div>
      </div>
      {isShowAns && isTrue && (
        <div className="accord-ans">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
