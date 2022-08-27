import React, { useState } from "react";

export default function NumberTriangle() {
  const [input, setInput] = useState("");

  const generateIsoscelesTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return (
        <h1 className="col-12 w-100 text-primary">Please enter a Number</h1>
      );
    }

    // input = 3
    let total = "";
    // total = " * * *"
    const rightTriangle = [];
    // rightTriangle = [" *", " * *", " * * *"]
    for (let i = 1; i <= input; i++) {
      total = total.concat(" ", i);
      rightTriangle.push(total);
    }

    // const reverseRightTriangle = rightTriangle.slice().reverse();
    // rightTriangle.slice().reverse() = [" * * *", " * *", " *"]
    // rightTriangle.slice().reverse().slice(1) = [" * *", " *"]
    // [].concat(rightTriangle, reverseRightTriangle) = [" *", " * *", " * * *", " * *", " *"]

    const fullTriangle = [].concat(
      rightTriangle,
      rightTriangle.slice().reverse().slice(1)
    );

    return fullTriangle.map((data, index) => (
      <h1 className="col-12 w-100 text-primary" key={index}>
        {data}
      </h1>
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
        {generateIsoscelesTriangle()}
      </div>
    </div>
  );
}