import React from "react";

const BasicAnimation = () => {
  const name = "Programming Hero";
  const nameArr = name.split("");
  return (
    <div>
      <div className="main">
        <div className="container">
          {nameArr.map((item, i) => (
            <span
              style={{ transitionDelay: `${i * 30}ms` }}
              className="alphabet">
              {item}
            </span>
          ))}
        </div>
        {/* <div className="loading">
          <div className="glass"></div>
          <div className="box"></div>
        </div> */}
      </div>
    </div>
  );
};

export default BasicAnimation;
