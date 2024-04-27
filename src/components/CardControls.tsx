"use client";

import Button, { ButtonTheme } from "./Button";
import InputNumber from "./InputNumber";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

interface CardControlsProps {
  min: number;
  max: number;
  step: number;
  productId: string;
}

export interface State {
  [id: string]: number;
}

const CardControls = (props: CardControlsProps) => {
  const [selectedVolume, setSelectedVolume] = useState(props.min);
  const [cart, setCart] = useLocalStorage<State>(
    "cart",
    {},
    { initializeWithValue: false }
  );

  const isAddedToCart = Boolean(cart[props.productId]);

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!isAddedToCart) {
      setCart((prev) => ({ ...prev, [props.productId]: selectedVolume }));
    } else {
      setCart((prev) => {
        const { [props.productId]: deletedProduct, ...rest } = prev;

        return rest;
      });
    }
  };
  const handleInputChange = (param: number) => {
    setSelectedVolume(param);

    if (isAddedToCart) {
      setCart((prev) => ({ ...prev, [props.productId]: param }));
    }
  };

  return (
    <div>
      <InputNumber
        min={props.min}
        max={props.max}
        step={props.step}
        value={cart[props.productId] || props.min}
        onChange={handleInputChange}
      />
      <Button
        text={isAddedToCart ? "Delete" : "Add to cart"}
        theme={isAddedToCart ? ButtonTheme.active : ButtonTheme.default}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default CardControls;
