"use client";

import { useCart } from "@/providers/CartContextProvider";
import CartCard from "./CartCard";
import CartListSum from "./CartListSum";
import NavLink from "./NavLink";

const CartList = () => {
  const { cartData } = useCart();

  if (Object.keys(cartData).length === 0) {
    return (
      <p>
        Cart is empty. You can return{" "}
        <NavLink path="/" isActive={true}>
          to the catalogue
        </NavLink>
        .
      </p>
    );
  }

  return (
    <>
      <div>
        {Object.entries(cartData).map(([key, value]) => (
          <CartCard key={key} productId={parseInt(key)} volume={value} />
        ))}
      </div>
      <CartListSum />
    </>
  );
};

export default CartList;
