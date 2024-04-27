import { CardProps } from "@/components/Card";
import Title from "@/components/Title";
import FiltersAndCards from "@/components/FiltersAndCards";
import getProductsParams from "@/queries/getProductsParams";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface APIResponceItem extends CardProps {}

type APIResponce = APIResponceItem[];

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getProductsParams());

  const data: APIResponce = [];
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Title>Catalogue</Title>
      <FiltersAndCards />
    </HydrationBoundary>
  );
}
