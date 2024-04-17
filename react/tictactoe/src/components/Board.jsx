import React from "react";
import Square from "./Square.jsx";
import { useState } from "react";
import calculateWinner from "../utils/calcWinner.js";

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        console.log(squares);
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = [...squares];

        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

  return (
    <div>

      <div>
        {[...Array(3)].map((_, i) => (
          <Square key={i + 1} val={squares[i]} setVal={()=>handleClick(i)} />
        ))}
      </div>

      <div>
        {[...Array(3)].map((_, i) => (
          <Square key={i + 4} val={squares[i+4]} setVal={()=>handleClick(i+4)} />
        ))}
      </div>

      <div>
        {[...Array(3)].map((_, i) => (
          <Square key={i + 7} val={squares[i+7]} setVal={()=>handleClick(i+7)} />
        ))}
      </div>

    </div>
  );
}



export default Board;
