"use client";

import Image from "next/image";
import { CardProps } from "./Card";
import { useQuery } from "@tanstack/react-query";
import getProductsParams from "@/queries/getProductsParams";
import CardControls from "./CardControls";
import Title, { TitleSize } from "./Title";
import InfoList from "./InfoList";

interface CartCardProps {
  productId: number;
  volume: number;
}

const CartCard = (props: CartCardProps) => {
  const { data }: { data: CardProps[] | undefined } = useQuery(
    getProductsParams()
  );

  const productData = data?.find((item) => item.id === props.productId);

  if (!productData) {
    return;
  }

  return (
    <div className="border-b border-slate-300  py-4 box-border relative flex">
      <div className="size-24 rounded-md overflow-hidden relative">
        <Image
          src={productData.image}
          width={286}
          height={96}
          alt={productData.name}
          className="relative max-h-full w-auto -left-full translate-x-2/4 h-24 max-w-none"
        />
      </div>
      <div className="grow pl-3">
        <Title size={TitleSize.s}>{productData.name}</Title>
        <InfoList
          lines={[
            ["Available(t)", productData.offered_volume_in_tons],
            ["Price(t)", `$${productData.price_per_ton}`],
            [
              "Cost",
              `$${
                Math.round(productData.price_per_ton * props.volume * 100) / 100
              }`,
            ],
            ["Earliest delivery date", productData.earliest_delivery],
          ]}
          classString="py-3"
        />
        <CardControls
          min={productData.distribution_weight}
          max={productData.offered_volume_in_tons}
          productId={props.productId}
          step={productData.distribution_weight}
        />
      </div>
    </div>
  );
};

export default CartCard;
