"use client";

import { ChangeEvent, useState } from "react";

interface InputNumberProps {
  min: number;
  max: number;
  step: number;
  onChange: (param: number) => void;
}
const InputNumber = (props: InputNumberProps) => {
  const [inputVal, setInputVal] = useState(props.min);
  const minInKG = props.min * 100;
  const maxInKG = props.max * 100;
  const stepInKG = props.step * 100;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = parseFloat(e.target.value);

    setInputVal(newVal);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("blur");
    const newValInKG = Math.floor(parseFloat(e.target.value) * 100);

    if (newValInKG > maxInKG) {
      setInputVal(props.max);
      props.onChange(props.max);

      return;
    }

    if (newValInKG < minInKG) {
      setInputVal(props.min);
      props.onChange(props.min);

      return;
    }

    const raundedVal = (newValInKG - (newValInKG % stepInKG)) / 100;

    setInputVal(raundedVal);
    props.onChange(raundedVal);
  };

  return (
    <input
      type="number"
      value={inputVal}
      className="border border-solid border-slate-300 rounded-md px-3 py-2"
      min={props.min}
      max={props.max}
      step={props.step}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default InputNumber;
