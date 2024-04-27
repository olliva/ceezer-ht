import Card, { CardProps } from "./Card";

interface CardsListProps {
  items: CardProps[];
}

const CardsList = (props: CardsListProps) => {
  return (
    <div className="flex flex-wrap -mx-2">
      {props.items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardsList;
