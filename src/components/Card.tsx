import Image from "next/image";
import CardControls from "./CardControls";

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

interface infoProps {
  lines: [key: string, value: string | number][];
}
const InfoProps = (props: infoProps) => {
  return (
    <div className="text-sm">
      {props.lines.map((line) => (
        <span key={line[0]} className="w-36 inline-block -mr-px">
          <span className="text-slate-600">{line[0]}:</span> {line[1]}
        </span>
      ))}
    </div>
  );
};
const Card = (props: CardProps) => {
  return (
    <div className="border border-solid border-slate-300 rounded-md p-4 w-80 box-border m-2 relative">
      <div className="flex mb-3">
        <div className="size-24 rounded-md overflow-hidden relative">
          <Image
            src={props.image}
            width={286}
            height={96}
            alt={props.name}
            className="relative max-h-full w-auto -left-full translate-x-2/4 h-24 max-w-none"
          />
        </div>
        <div className="ml-5 flex-col flex">
          <h2 className="text-m font-bold">{props.name}</h2>
          <p className="text-slate-600 text-sm mt-2">
            {props.supplier_name}, {props.country}
          </p>
        </div>
      </div>

      <p className="line-clamp-3">{props.description}</p>
      <div className="border-slate-300 border-t -mr-4 -ml-4 p-4 mt-5">
        <dl className="text-sm">
          <InfoProps
            lines={[
              ["Available(t)", props.offered_volume_in_tons],
              ["Price(t)", `$${props.price_per_ton}`],
            ]}
          />
        </dl>
      </div>
      <CardControls
        min={props.distribution_weight}
        max={props.offered_volume_in_tons}
        step={props.distribution_weight}
        productId={props.id}
      />
    </div>
  );
};

export default Card;
