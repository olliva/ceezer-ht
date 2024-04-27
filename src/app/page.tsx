import { CardProps } from "@/components/Card";
import Title from "@/components/Title";
import FiltersAndCards from "@/components/FiltersAndCards";

interface APIResponceItem extends CardProps {}

type APIResponce = APIResponceItem[];

export default async function Home() {
  return (
    <>
      <Title>Catalogue</Title>
      <FiltersAndCards />
    </>
  );
}
