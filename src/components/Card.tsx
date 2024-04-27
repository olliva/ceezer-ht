import Image from "next/image";
import InputNumber from "./InputNumber";

export interface CardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  price_per_ton: number;
  offered_volume_in_tons: number;
  distribution_weight: number;
  supplier_name: string;
  earliest_delivery: string;
  sdgs: number[];
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="border border-solid border-slate-300 rounded-md p-4 w-80 box-border m-5 relative">
      <div className="flex mb-5">
        <div className="size-24 rounded-md overflow-hidden relative">
          <Image
            src={props.image}
            width={286}
            height={96}
            alt={props.name}
            className="relative max-h-full w-auto -left-full translate-x-2/4 h-24 max-w-none"
          />
        </div>
        <div className="ml-5">
          <h2>{props.name}</h2>
          <p>
            {props.supplier_name}, {props.country}
          </p>
        </div>
      </div>

      <p className="line-clamp-3">{props.description}</p>
      <div className="border-slate-300 border-t -mr-4 -ml-4 p-4 mt-5">
        Available(t): {props.offered_volume_in_tons}
        Price(t): ${props.price_per_ton}
      </div>
      <InputNumber
        min={props.distribution_weight}
        max={props.offered_volume_in_tons}
        step={props.distribution_weight}
      />
    </div>
  );
};

export default Card;
