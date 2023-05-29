import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../../store/calculator/calculatorSlice";

export const Calculator = () => {
  const [value,setValue] = useState('')
  const { result } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculatorActions.addNumber(+value));
    setValue('')
  };
  const minus = () => {
    dispatch(calculatorActions.minus(+value));
    setValue('')

  };
  const multiply = () => {
    dispatch(calculatorActions.multiply(+value));
    setValue('')

  };
  const subtract = () => {
    dispatch(calculatorActions.subtract(+value));
    setValue('')

  };

  return (
    <div>
      <h2>Result : {result}</h2>
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />

      <button onClick={addHandler}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={subtract}>/</button>
    </div>
  );
};
