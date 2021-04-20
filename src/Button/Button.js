import React from "react";
import "./Button.css"

const Button = (props) => {
    return <button onClick={props.onClick} value={props.isWinning} className="generated">{props.name}</button>
}

export default Button;