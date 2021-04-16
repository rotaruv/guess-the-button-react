import React, { useState } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input"

function App() {
  
  const [counter, setCounter] = useState("")
  const [inputValue, setInputValue] = useState("")

  //Function to set the input value
  const inputValueHandler = (event) => {
      setInputValue(event.target.value)
  }

  /*
  Function to grab the value from the input when the submit button was clicked
  Reset the input value to make the input box empty
  */
  const counterHandler = (event) => {
    setCounter(inputValue)
    setInputValue("")
    event.preventDefault()
  }

  //Generate a random number depending on the input value
  const randomNumber = Math.floor(Math.random() * counter)

  /*
  Function which check if the clicked button coincide with the generated random number
  Change the className depending on that (correct is they coincide, incorrect otherwise)
  Reset the windows in 1s after the button was clicked
  */
  const buttonCheck = (event) => {
    // eslint-disable-next-line
    event.target.value == randomNumber ? event.target.className = "correct" : event.target.className = "incorrect"
    setTimeout(() =>{ 
      window.location.reload();; 
    }, 1000);
  }


  //Push in an empty array the number of buttons equal with the input number
  const buttonsList = [];
  for(let i = 0; i < counter; i++) {
    buttonsList.push(<Button onClick={buttonCheck} key={i} name={i}/>)
  }

  return (
    <div className="container">
      <Input onClick={counterHandler} onChange={inputValueHandler} boxValue={inputValue}/>
      {buttonsList}
    </div>
  );
}

export default App;
