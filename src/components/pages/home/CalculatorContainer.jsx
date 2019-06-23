import React from "react";
import CalculatorButton from "./CalculatorButton";

const operators = ["+", "-", "*", "/"];

const CalculatorContainer = ({ onOperatorChange }) =>
  operators.map(operator => (
    <CalculatorButton onOperatorChange={onOperatorChange} operator={operator} />
  ));

export default CalculatorContainer;
