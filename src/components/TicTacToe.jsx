import { useState } from "react";
import styles from "../assets/styles/TicTacToe.module.css"



export function TicTacToe() {
    const [moves, setMoves] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const winner = checkWinner(moves);
    
    function makeMove(index) {
        if (checkWinner(moves)) {
            return;
        }

        if (winner) {
            return;
        }

        const newMoves = [...moves];
        newMoves[index] = isX ? "X" : "O";

        setIsX(!isX)
        setMoves(newMoves);
    }


    return (
        <>
        <div className={styles.board}>
            {moves.map((m, index) => <Square key={index} index={index} content={m} onMakeMove={makeMove} winner={winner}/>)}
        </div>
        {winner && <p>Congrats {winner} wins!</p>}
        {(!winner && !moves.includes(null)) && <p>It&apos;s a tie!</p>}
        </>
    )
}

function Square({ index, content, onMakeMove }) {
    
    return (
        <>
            <button className={styles.square} onClick={() => {
                onMakeMove(index);
            }}> {content} </button>
            </>
    )
}

function checkWinner(moves) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
            return moves[a];
        }

    }

    return false;
}

