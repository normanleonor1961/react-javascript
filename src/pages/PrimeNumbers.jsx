import React, { useState } from "react";

export default function PrimeNumbers() {
  const [input, setInput] = useState("");
  let isPrime = true;

  const checkIfPrime = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }

    // Check if input is less than 1
    else if (parseInt(input) < 1) {
      return "The number is NOT a prime number";
    }

    // Check if input is equal to 1
    else if (parseInt(input) === 1) {
      return "1 is neither prime nor composite number";
    }

    // Check if input is greater than 1
    else {
      for (let i = 2; i < parseInt(input); i++) {
        if (parseInt(input) % i === 0) {
          isPrime = false;
        }
      }
    }
    return isPrime
      ? `${input} is a prime number`
      : `${input} is NOT a prime number`;
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
        <h1 className="col-12 w-100 text-primary">{checkIfPrime()}</h1>
      </div>
    </div>
  );
}