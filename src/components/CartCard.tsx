"use client";

import { CardProps } from "./Card";
import { useQuery } from "@tanstack/react-query";
import getProductsParams from "@/queries/getProductsParams";
import CardControls from "./CardControls";

interface CartCardProps {
  productId: string;
  volume: number;
}

const CartCard = (props: CartCardProps) => {
  const { data }: { data: CardProps[] | undefined } = useQuery(
    getProductsParams()
  );

  const productData = data?.find(
    (item) => item.id.toString() === props.productId
  );

  if (!productData) {
    return;
  }

  return (
    <div className="border-b border-slate-300  py-4 box-border relative">
      {productData.name} {props.volume} {productData.price_per_ton} $
      {Math.round(productData.price_per_ton * props.volume * 100) / 100}
      <CardControls
        min={productData.distribution_weight}
        max={productData.offered_volume_in_tons}
        productId={props.productId}
        step={productData.distribution_weight}
      />
    </div>
  );
};

export default CartCard;
