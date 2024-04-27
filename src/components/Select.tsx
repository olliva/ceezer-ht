"use client";

import { ChangeEvent } from "react";

export interface SelectProps {
  name: string;
  defaultLabel: string;
  options: {
    value: string;
    name: string;
  }[];

  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const Select = (props: SelectProps) => {
  return (
    <select
      name={props.name}
      id={props.name}
      onChange={props.onChange}
      defaultValue=""
      key=""
    >
      <option value="">{props.defaultLabel}</option>
      {props.options.map((option) => (
        <option value={option.value} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
