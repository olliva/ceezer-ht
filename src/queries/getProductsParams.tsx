import { CardProps } from "@/components/Card";

interface APIResponceItem extends CardProps {}

type APIResponce = APIResponceItem[];

const getProducts = async () => {
  const responce = await fetch(
    "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/tech/frontend-code-challenge/projects_sample.json"
  );
  const data: APIResponce = await responce.json();

  return data;
};

const getProductsParams = () => {
  const queryKey = ["products"];

  const queryFn = async () => {
    return getProducts();
  };

  return { queryKey, queryFn };
};

export default getProductsParams;
