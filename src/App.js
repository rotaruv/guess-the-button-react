import React, { useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input"

const App = () => {
  
  /*
  1.State for input change
  2.State for the submit button (to grab the value from the input)
  3.State for randomNumber
  */
  const [inputValue, setInputValue] = useState("")
  const [counter, setCounter] = useState("")
  const [randomNumber, setRandomNumber] = useState(null)

  //Function to set the input value
  const inputValueHandler = (event) => {
      setInputValue(event.target.value)
  }

  //Set the buttons number and the randonMumber after clicking the submit
  //The randomNumber won't be changed on every page rendering in this case
  const counterHandler = (e) => {
    setCounter(inputValue)
    setRandomNumber(Math.floor(Math.random() * inputValue))
    setInputValue("")
    e.preventDefault()
  }

  // console.log("random " + randomNumber)

  //Change the style of the button depending on isWinning prop
  const checkButton = (event) => {
    if ( event.target.value === "true") {
      event.target.className = "correct"
    } else {
      event.target.className = "incorrect"
    }
  }

  //Push in an empty array the number of buttons equal with the input number
  const buttonsList = [];
  for(let i = 0; i < counter; i++) {
    let winning = false;
    if (i === randomNumber) {
      winning = true
    }
    buttonsList.push(
      <Button 
        onClick={checkButton}
        isWinning = {winning}
        key = {i}
        name = {i}> 
      </Button>
    )
    }
  
  return (
    <div className="container">
      <Input onClick={counterHandler} onChange={inputValueHandler} boxValue={inputValue}/>
      {buttonsList}
    </div>
  );
}

export default App;
