import Select, { SelectProps } from "./Select";

interface FiltersListProps {
  filters: {
    type: "select";
    data: SelectProps;
  }[];
}

const FiltersList = (props: FiltersListProps) => {
  return (
    <div>
      {props.filters.map((filter) => {
        if (filter.type === "select") {
          return <Select key={filter.data.name} {...filter.data} />;
        }

        return "";
      })}
    </div>
  );
};

export default FiltersList;
