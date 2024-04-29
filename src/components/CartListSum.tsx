"use client";

import { CardProps } from "./Card";
import { useQuery } from "@tanstack/react-query";
import getProductsParams from "@/queries/getProductsParams";
import { costRounded } from "@/utils";
import { useCart } from "@/providers/CartContextProvider";

const CartListSum = () => {
  const { cartData } = useCart();
  const { data }: { data: CardProps[] | undefined } = useQuery(
    getProductsParams()
  );

  const sumInfo = Object.entries(cartData).reduce(
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
    <div className="py-4">
      <div className="font-bold text-2xl">
        <span>Total cost:</span> ${roundedCost}
      </div>
      <div>
        <span className="text-slate-600">Total volume:</span>{" "}
        {costRounded(sumInfo[1])}t
      </div>
      <div>
        <span className="text-slate-600">Average price:</span>{" "}
        {costRounded(roundedCost / sumInfo[1])} ($/t)
      </div>
    </div>
  );
};

export default CartListSum;
