"use client";

import Button, { ButtonTheme } from "./Button";
import InputNumber from "./InputNumber";
import { useState } from "react";
import { useCart } from "@/providers/CartContextProvider";

interface CardControlsProps {
  min: number;
  max: number;
  step: number;
  productId: number;
}

const CardControls = (props: CardControlsProps) => {
  const [selectedVolume, setSelectedVolume] = useState(props.min);
  const { cartData, addItem, deleteItem, changeValue } = useCart();

  const isAddedToCart = Boolean(cartData[props.productId]);

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!isAddedToCart) {
      addItem && addItem(props.productId, selectedVolume);
    } else {
      deleteItem && deleteItem(props.productId);
    }
  };
  const handleInputChange = (param: number) => {
    setSelectedVolume(param);

    if (isAddedToCart) {
      changeValue && changeValue(props.productId, param);
    }
  };

  return (
    <div>
      <InputNumber
        min={props.min}
        max={props.max}
        step={props.step}
        value={cartData[props.productId] || props.min}
        onChange={handleInputChange}
      />
      <Button
        text={isAddedToCart ? "Delete" : "Add to cart"}
        theme={isAddedToCart ? ButtonTheme.default : ButtonTheme.active}
        onClick={handleButtonClick}
        className="float-right"
      />
    </div>
  );
};

export default CardControls;
