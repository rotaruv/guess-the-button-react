import React from "react";

const Input = (props) => {

    return (
        <form onSubmit={props.onClick}>
            <input onChange={props.onChange} value={props.boxValue} placeholder="Enter a number here"/>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
}

export default Input;