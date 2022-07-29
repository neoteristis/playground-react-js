import React from "react";

function Square(props) {

    let className;
    if (props.isWinner === true) {
        className =  "square winner-square";
    } else {
        className = "square";
    }

    return (
        <button key={props.myKey} className={className} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export {Square};