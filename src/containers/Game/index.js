import React from "react";
import {Board} from "../../components/Board";
import {calculateWinner} from "./calculateWinner";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        let winner_cells = calculateWinner(squares);
        if (winner_cells || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winnerCells = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const descText = move ?
                "Go to move #" + move :
                "Go to start";

            let desc;
            if (move === this.state.stepNumber) {
                desc = <b>{descText}</b>
            } else {
                desc = descText;
            }

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status;
        if (winnerCells) {
            status = 'Winner: ' + (this.state.xIsNext ? "O" : "X");
        } else {
            console.log(history.length);
            if (history.length === 10) { // 9 moves + the starting board
                status = 'The game is a draw...';
            } else {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        winnerCells={winnerCells}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        );
    }
}

export {Game};