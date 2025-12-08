import { useState } from "react";
import "../App.css";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const append = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const tokens = display.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
      if (!tokens) {
        setDisplay("Error");
        return;
      }

      const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
      const values = [];
      const ops = [];

      const applyOp = () => {
        const b = values.pop();
        const a = values.pop();
        const op = ops.pop();

        switch (op) {
          case "+": values.push(a + b); break;
          case "-": values.push(a - b); break;
          case "*": values.push(a * b); break;
          case "/": values.push(a / b); break;
          default: break;
        }
      };

      tokens.forEach((token) => {
        if (!isNaN(token)) {
          values.push(parseFloat(token));
        } else {
          while (
            ops.length &&
            precedence[ops[ops.length - 1]] >= precedence[token]
          ) {
            applyOp();
          }
          ops.push(token);
        }
      });

      while (ops.length) applyOp();
      setDisplay(values[0].toString());
    } catch (err) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <h2 className="calculator-heading">CALCULATOR</h2>
      <input type="text" value={display} placeholder="0" readOnly />
      <div className="buttons">
        <button onClick={() => append("7")}>7</button>
        <button onClick={() => append("8")}>8</button>
        <button onClick={() => append("9")}>9</button>
        <button onClick={deleteLast}> DEL </button>
        <button onClick={() => append("4")}>4</button>
        <button onClick={() => append("5")}>5</button>
        <button onClick={() => append("6")}>6</button>
        <button onClick={() => append("+")}>+</button>
        <button onClick={() => append("1")}>1</button>
        <button onClick={() => append("2")}>2</button>
        <button onClick={() => append("3")}>3</button>
        <button onClick={() => append("-")}>-</button>
        <button onClick={() => append(".")}>.</button>
        <button onClick={() => append("0")}>0</button>
        <button onClick={() => append("/")}>/</button>
        <button onClick={() => append("*")}>*</button>
        <button onClick={clearDisplay}> AC </button>
        <button onClick={calculate}> = </button>
      </div>
    </div>
  );
}