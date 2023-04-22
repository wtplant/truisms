import React, { useState } from "react";
import { truisms } from "./Truisms"; // import the truisms array

function getRandomTruisms() {
  const randomIndices = new Set();

  while (randomIndices.size < 3) {
    randomIndices.add(Math.floor(Math.random() * truisms.length));
  }

  return Array.from(randomIndices).map((index) => truisms[index]);
}

function App() {
  const [answer, setAnswer] = useState("");
  const [output, setOutput] = useState(null);
  const [questionVisible, setQuestionVisible] = useState(true); // add state for question visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === "no") {
      setOutput("BE GONE");
    } else {
      setOutput(getRandomTruisms().join(" - "));
    }
    setQuestionVisible(false); // hide the question after submitting
  };

  return (
    <div className="App">
      {questionVisible && ( // only show the question if questionVisible is true
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">is it knowledge you seek </label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </form>
      )}
      {output && <div>{output}</div>}
    </div>
  );
}

export default App;
