"use client";
import { useLocalStorage } from "usehooks-ts";
import { State } from "./CardControls";
import { CardProps } from "./Card";
import { useQuery } from "@tanstack/react-query";
import getProductsParams from "@/queries/getProductsParams";
import { costRounded } from "@/utils";

const CartListSum = () => {
  const [cart, setCart] = useLocalStorage<State>(
    "cart",
    {},
    { initializeWithValue: false }
  );
  const { data }: { data: CardProps[] | undefined } = useQuery(
    getProductsParams()
  );

  const sumInfo = Object.entries(cart).reduce(
    (prev, [key, value]) => {
      const itemData = data?.find((item) => item.id.toString() === key);

      if (!itemData) {
        return prev;
      }

      const cost = prev[0] + value * itemData.price_per_ton;
      const volume = prev[1] + value;

      return [cost, volume];
    },
    [0, 0]
  );

  const roundedCost = costRounded(sumInfo[0]);

  return (
    <div>
      <div>Total volume: {sumInfo[1]}t</div>

      <div>Total cost: ${roundedCost}</div>
      <div>Average price: {costRounded(roundedCost / sumInfo[1])} ($/t)</div>
    </div>
  );
};

export default CartListSum;
