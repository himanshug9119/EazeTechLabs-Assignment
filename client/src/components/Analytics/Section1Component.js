import React from "react";

const Section1Component = (props) => {
  return (
    <div
      className="w-52 h-32 rounded-xl p-2 shadow-md bg-slate-500"
      style={{
        color: "#ffffff",
        width: "207.82px",
        height: "134.33px",
        top: "173.56px",
        gap: "0px",
        font:"Poppens",
        opacity: "0.8", // assuming this is the intended opacity value, as the provided value of '0px' is invalid
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <div className="flex flex-row items-center gap-2">
        <span>{props.value}</span>
        <img
          src={
            props.gain ? "./assets/icons/gain.svg" : "./assets/icons/loss.svg"
          }
          alt={props.gain ? "Gain" : "Loss"}
        />
      </div>
      <div
        style={{
          width: "94px",
          height: "16px",
          top: "79.02px",
          left: "19.75px",
          gap: "0px",
          opacity: "0.85",
        }}
      >
        {props.gainValue} {props.gainValuePercentage}
      </div>
      <div>
        {props.value2} {props.value2Type}
      </div>
    </div>
  );
};

export default Section1Component;
