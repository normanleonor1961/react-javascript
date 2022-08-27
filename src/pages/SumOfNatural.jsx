import React, { useState } from "react";

export default function SumOfNatural() {
  const [input, setInput] = useState("");

  const getSumOfNaturalNumbers = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }

    let total = 0;
    for (let i = 1; i <= input; i++) {
      total = total + i;
    }

    return total;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        <h1 className="col-12 w-100 text-primary">
          {getSumOfNaturalNumbers()}
        </h1>
      </div>
    </div>
  );
}