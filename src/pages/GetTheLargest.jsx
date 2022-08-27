import React, { useState } from "react";

export default function GetTheLargest() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getTheLargestNumber = () => {
    // if (
    //   parseFloat(firstInput) > parseFloat(secondInput) &&
    //   parseFloat(firstInput) > parseFloat(thirdInput)
    // ) {
    //   return firstInput;
    // } else if (
    //   parseFloat(secondInput) > parseFloat(firstInput) &&
    //   parseFloat(secondInput) > parseFloat(thirdInput)
    // ) {
    //   return secondInput;
    // } else {
    //   return thirdInput;
    // }
    return Math.max(firstInput, secondInput, thirdInput);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={firstInput}
            onChange={(event) => {
              setFirstInput(event.target.value);
            }}
          />
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={secondInput}
            onChange={(event) => {
              setSecondInput(event.target.value);
            }}
          />
          <input
            type="text"
            className="lead"
            placeholder="Input"
            value={thirdInput}
            onChange={(event) => {
              setThirdInput(event.target.value);
            }}
          />
        </div>
        <h1 className="col-12 w-100 text-primary">{getTheLargestNumber()}</h1>
      </div>
    </div>
  );
}