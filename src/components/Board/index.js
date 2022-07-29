import React from "react";
import {Square} from "../Square";

class Board extends React.Component {

    renderSquare(i, isWinner) {
        return <Square key={i.toString()} myKey={i.toString()} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} isWinner={isWinner}/>;
    }

    createBoard() {

        let output_array = [];
        for (let i = 0; i < 3; i++) {
            let temp_array = [];
            for (let j = 0; j < 3; j++) {
                let id = j + 3*i;

                if (this.props.winnerCells && this.props.winnerCells.includes(id)) {
                    temp_array.push(this.renderSquare(id, true))
                } else {
                    temp_array.push(this.renderSquare(id, false))
                }
            }
            output_array.push(<div key={i+1} className="board-row">{temp_array}</div>)
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