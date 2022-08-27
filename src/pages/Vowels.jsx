import React, { useState } from "react";

export default function Vowels() {
  const [input, setInput] = useState("");

  const getTotalNumberOfVowels = () => {
    let total = 0;

    // input.split("").forEach((character) => {
    //   if (
    //     character.toLocaleLowerCase() === "a" ||
    //     character.toLocaleLowerCase() === "e" ||
    //     character.toLocaleLowerCase() === "i" ||
    //     character.toLocaleLowerCase() === "o" ||
    //     character.toLocaleLowerCase() === "u"
    //   ) {
    //     total = total + 1;
    //   }
    // });

    input.split("").forEach((character) => {
      if (character.toLowerCase().match(/[aeiou]/)) {
        total = total + 1;
      }
    });

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
          {getTotalNumberOfVowels()}
        </h1>
      </div>
    </div>
  );
}