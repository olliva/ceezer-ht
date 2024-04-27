"use client";

import {
  ACTIVE_TEXT_COLOR,
  ACTIVE_TEXT_COLOR_HOVER,
  ACTIVE_BG_COLOR,
  ACTIVE_BG_COLOR_HOVER,
  ACTIVE_B_COLOR,
  ACTIVE_B_COLOR_HOVER,
} from "@/constants";

export enum ButtonTheme {
  default = "default",
  active = "active",
}

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
  theme?: ButtonTheme;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const bgActiveColor = "bg-lime-600";
  const bgActiveColorHover = "hover:bg-lime-400";
  const bgBorder = "border-lime-600";
  const bgBorderHover = "hover:border-lime-400";
  const textColor = "text-lime-600";
  const textColorHover = "hover:text-lime-400";

  const styles = {
    [ButtonTheme.active]: `${bgActiveColor} text-white ${bgActiveColorHover}`,
    [ButtonTheme.default]: `${textColor} ${textColorHover} ${bgBorderHover}`,
  }[props.theme || ButtonTheme.default];

  return (
    <button
      className={`${styles} rounded-md py-2 px-3 border border-solid ${bgBorder} transition-all min-w-36 ${
        props.className || ""
      }`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
