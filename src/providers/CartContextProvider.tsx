"use client";

import { useEffect, useState, useRef } from "react";
import { createContext } from "react";
import { useContext } from "react";

export interface CartStoreData {
  [id: number]: number;
}

export type AddProductToCart = (id: number, volume: number) => void;
export type DeleteProductFromCart = (id: number) => void;
export type ChangeCountInCart = (id: number, volume: number) => void;

export interface CartContextData {
  cartData: CartStoreData;
  addItem?: AddProductToCart;
  deleteItem?: DeleteProductFromCart;
  changeValue?: ChangeCountInCart;
}

const usePreviousValue = (value: CartStoreData) => {
  const ref = useRef<CartStoreData>();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const CartContext = createContext<CartContextData>({
  cartData: {},
});

export const CartContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [cartData, setCartData] = useState<CartStoreData>({});
  const previousValue = usePreviousValue({});

  const addItem: AddProductToCart = (id, volume) => {
    setCartData((prev) => ({ ...prev, [id]: volume }));
  };
  const deleteItem: DeleteProductFromCart = (id) => {
    setCartData((prev) => {
      const { [id]: deletedProduct, ...rest } = prev;

      return rest;
    });
  };
  const changeValue: ChangeCountInCart = (id, volume) => {
    setCartData((prev) => ({ ...prev, [id]: volume }));
  };

  // On first load from LS
  useEffect(() => {
    const raw = window.localStorage.getItem("cart");

    if (!raw) {
      return;
    }

    const parsedData: CartStoreData = JSON.parse(raw);

    setCartData(parsedData);
  }, []);

  useEffect(() => {
    if (previousValue === undefined) {
      return;
    }

    window.localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <CartContext.Provider
      value={{ cartData, addItem, deleteItem, changeValue }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
