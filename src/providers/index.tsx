import ProductsProvider from "./ProductsProvider";
import { CartContextProvider } from "@/providers/CartContextProvider";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ProductsProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ProductsProvider>
  );
};

export default Providers;
