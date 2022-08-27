import React, { useState } from "react";

export default function MultiplicationTable() {
  const [input, setInput] = useState("");
  const sequence = [];

  const getMultiplicationTable = () => {
    if (isNaN(input) || !input) {
      return (
        <h1 className="col-12 w-100 text-primary">Please enter a Number</h1>
      );
    }

    // Create multiplication table
    for (let i = 1; i <= 10; i++) {
      sequence.push(i * input);
    }

    return sequence.map((data) => (
      <h1 className="col-12 w-100 text-primary">{data}</h1>
    ));
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
          {getMultiplicationTable()}
        </h1>
      </div>
    </div>
  );
}