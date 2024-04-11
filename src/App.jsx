import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  const handleChange = (inputId, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <Inputs onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
