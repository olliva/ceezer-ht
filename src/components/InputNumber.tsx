"use client";

import { ChangeEvent } from "react";

interface InputNumberProps {
  min: number;
  max: number;
  step: number;
}
const InputNumber = (props: InputNumberProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <input
      type="number"
      className="border border-solid border-slate-300 rounded-md px-3 py-2"
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={handleChange}
    />
  );
};

export default InputNumber;
