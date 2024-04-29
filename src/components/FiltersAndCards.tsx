"use client";

import { CardProps } from "./Card";
import { useQuery } from "@tanstack/react-query";
import CardsList from "./CardsList";
import FiltersList from "./FiltersList";
import { SelectProps } from "./Select";
import { ChangeEvent, useState } from "react";
import getProductsParams from "@/queries/getProductsParams";

const FiltersAndCards = () => {
  const { data }: { data: CardProps[] | undefined } = useQuery(
    getProductsParams()
  );

  const [visibleCards, setVisibleCards] = useState(data);
  const countriesMap = new Map<string, string>();
  let minPrice = Number.POSITIVE_INFINITY;
  let maxPrice = 0;

  data?.forEach((item) => {
    minPrice = Math.min(minPrice, item.price_per_ton);
    maxPrice = Math.max(maxPrice, item.price_per_ton);
    countriesMap.set(item.country.toLowerCase(), item.country);
  });

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (countriesMap.has(e.target.value) && data) {
      setVisibleCards(
        data.filter((item) => item.country.toLowerCase() === e.target.value)
      );
    } else {
      setVisibleCards(data);
    }
  };

  const countryFilterOptions: SelectProps["options"] = [];

  countriesMap.forEach((value, key) => {
    countryFilterOptions.push({
      name: value,
      value: key,
    });
  });

  const countryFilterData: SelectProps = {
    name: "country",
    defaultLabel: "Choose country",
    options: countryFilterOptions,
    onChange: handleCountryChange,
  };

  return (
    data && (
      <>
        <FiltersList filters={[{ type: "select", data: countryFilterData }]} />
        {visibleCards && <CardsList items={visibleCards} />}
      </>
    )
  );
};

export default FiltersAndCards;
