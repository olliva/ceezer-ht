"use client";

import { useLocalStorage } from "usehooks-ts";
import { State } from "./CardControls";
import CartCard from "./CartCard";
import CartListSum from "./CartListSum";
import NavLink from "./NavLink";

const CartList = () => {
  const [cart, setCart] = useLocalStorage<State>(
    "cart",
    {},
    { initializeWithValue: false }
  );

  if (Object.keys(cart).length === 0) {
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
        {Object.entries(cart).map(([key, value]) => (
          <CartCard key={key} productId={key} volume={value} />
        ))}
      </div>
      <CartListSum />
    </>
  );
};

export default CartList;
