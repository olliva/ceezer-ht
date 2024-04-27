"use client";

import { ACTIVE_COLOR, ACTIVE_COLOR_HOVER } from "@/constants";

export enum ButtonTheme {
  default = "default",
  active = "active",
}

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
  theme?: ButtonTheme;
}

const Button = (props: ButtonProps) => {
  const styles = {
    [ButtonTheme.active]: `bg-${ACTIVE_COLOR} text-white hover:bg-${ACTIVE_COLOR_HOVER}`,
    [ButtonTheme.default]: `text-${ACTIVE_COLOR} hover:text-${ACTIVE_COLOR_HOVER} hover:border-${ACTIVE_COLOR_HOVER}`,
  }[props.theme || ButtonTheme.default];

  return (
    <button
      className={`${styles} rounded-md py-2 px-3 border border-solid border-lime-600 transition-all`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
