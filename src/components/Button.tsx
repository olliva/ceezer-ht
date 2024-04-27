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
}

const Button = (props: ButtonProps) => {
  const styles = {
    [ButtonTheme.active]: `bg-[var(--activeColor)] text-white hover:bg-[var(--activeColorHover)]`,
    [ButtonTheme.default]: `tx-[var(--activeColor)] hover:tx-[var(--activeColorHover)] hover:border-[var(--activeColorHover)]`,
  }[props.theme || ButtonTheme.default];

  return (
    <button
      className={`${styles} rounded-md py-2 px-3 border border-solid ${ACTIVE_B_COLOR} transition-all`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
