import React, { useState } from "react";

export default function CheckWithin100To500() {
  const [input, setInput] = useState("");

  const checkNumber = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }

    // let isWithin = "false";
    // for (let i = 100; i <= 500; i++) {
    //   if (i === parseInt(input)) {
    //     isWithin = "true";
    //   }
    // }

    // let isWithin = "false";
    // if (100 <= parseInt(input) && parseInt(input) <= 500) {
    //   isWithin = "true";
    // }

    return `${100 <= parseInt(input) && parseInt(input) <= 500}`;
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
        <h1 className="col-12 w-100 text-primary">{checkNumber()}</h1>
      </div>
    </div>
  );
}