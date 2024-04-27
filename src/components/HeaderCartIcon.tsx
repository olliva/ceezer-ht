"use client";
import { State } from "./CardControls";

import { useLocalStorage } from "usehooks-ts";

const HeaderCartIcon = () => {
  const [cart] = useLocalStorage<State>(
    "cart",
    {},
    { initializeWithValue: false }
  );

  return `(${Object.keys(cart).length})`;
};

export default HeaderCartIcon;
