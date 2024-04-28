import SDGSTagsList, { SGDSTagsListProps } from "./SDGSTagsList";

const SDGSInfo = (props: SGDSTagsListProps) => {
  if (props.items.length === 0) {
    return "";
  }

  return (
    <div className="my-3">
      <h3 className="font-bold text-sm">SDGS Goals ({props.items.length}):</h3>
      <SDGSTagsList items={props.items} />
    </div>
  );
};

export default SDGSInfo;
