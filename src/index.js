import React from "react";
import ReactDOM from "react-dom";
import { add, div, sub, mult } from "./Calc";

ReactDOM.render(
  <>
    <ul>
      <li> Sum of two numbers is {add(30, 5)} </li>
      <li> Sub of two numbers is {sub(30, 5)} </li>
      <li> Sum of two numbers is {div(30, 4.5)} </li>
      <li> Sum of two numbers is {mult(30, 5)} </li>
    </ul>
  </>,

  document.getElementById("root")
);
