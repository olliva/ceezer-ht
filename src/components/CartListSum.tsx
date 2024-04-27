"use client";
import { useLocalStorage } from "usehooks-ts";
import { State } from "./CardControls";
import { CardProps } from "./Card";
import { useQuery } from "@tanstack/react-query";
import getProductsParams from "@/queries/getProductsParams";

const CartListSum = () => {
  const [cart, setCart] = useLocalStorage<State>(
    "cart",
    {},
    { initializeWithValue: false }
  );
  const { data }: { data: CardProps[] | undefined } = useQuery(
    getProductsParams()
  );

  const sumPrice = Object.entries(cart).reduce((prev, [key, value]) => {
    const itemData = data?.find((item) => item.id.toString() === key);

    if (!itemData) {
      return prev;
    }

    return prev + value * itemData.price_per_ton;
  }, 0);

  return <div>Summary: ${Math.round(sumPrice * 100) / 100}</div>;
};

export default CartListSum;
