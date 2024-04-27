"use client";

import Button, { ButtonTheme } from "./Button";
import InputNumber from "./InputNumber";
import { ChangeEvent, useState } from "react";

interface CardControlsProps {
  min: number;
  max: number;
  step: number;
  productId: string;
}

const CardControls = (props: CardControlsProps) => {
  const [selectedVolume, setSelectedVolume] = useState(props.min);
  const [isAddedToCart, setAddedToCart] = useState(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    setAddedToCart((prev) => !prev);
  };
  const handleInputChange = (param: number) => {
    setSelectedVolume(param);
  };

  return (
    <div>
      <InputNumber
        min={props.min}
        max={props.max}
        step={props.step}
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
