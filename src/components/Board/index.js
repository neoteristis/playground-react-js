import React from "react";
import {Square} from "../Square";

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>;
    }

    createBoard() {
        let output_array = [];
        for (let i = 0; i < 3; i++) {
            let temp_array = [];
            for (let j = 0; j < 3; j++) {
                temp_array.push(this.renderSquare(j + 3*i))
            }
            output_array.push(<div className="board-row">{temp_array}</div>)
        }
        return output_array
    }

    render() {
        return (
            <div>
                {this.createBoard()}
            </div>
        );
    }
}

export {Board};