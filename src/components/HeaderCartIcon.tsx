"use client";
import { useCart } from "@/providers/CartContextProvider";

const HeaderCartIcon = () => {
  const { cartData } = useCart();

  return `(${Object.keys(cartData).length})`;
};

export default HeaderCartIcon;
