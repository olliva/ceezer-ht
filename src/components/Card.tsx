import Image from "next/image";
import CardControls from "./CardControls";
import SDGSInfo from "./SDGSInfo";
import InfoList from "./InfoList";

export interface CardProps {
  id: number;
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
    <div className="border border-solid border-slate-300 rounded-md p-4 w-80 box-border m-2 relative flex-col flex">
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

      <p className="line-clamp-3 mb-3">{props.description}</p>
      <SDGSInfo items={props.sdgs} />
      <InfoList
        lines={[
          ["Available(t)", props.offered_volume_in_tons],
          ["Price(t)", `$${props.price_per_ton}`],
        ]}
        classString="border-slate-300 border-t -mr-4 -ml-4 p-4 mt-auto text-s"
      />
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
